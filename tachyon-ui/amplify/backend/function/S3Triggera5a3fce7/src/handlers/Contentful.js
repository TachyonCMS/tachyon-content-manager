/* Amplify Params - DO NOT EDIT
    API_TACHYONAPI_GRAPHQLAPIENDPOINTOUTPUT
    API_TACHYONAPI_GRAPHQLAPIIDOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT */// eslint-disable-next-line

'use strict'

const AWS = require('aws-sdk')
const S3 = new AWS.S3({ signatureVersion: 'v4' })
const AUTH_TYPE = require('aws-appsync').AUTH_TYPE
const AWSAppSyncClient = require('aws-appsync').default
const uuidv4 = require('uuid/v4')
const gql = require('graphql-tag')

const oboe = require('oboe')

async function processEntry(item, spaceId, userId) {
  const id = await uuidv4()
  item.id = id
  item.spaceId = spaceId
  item.contentSchema = item.sys.contentType.sys.id
  item.fields = JSON.stringify(item.fields)
  
  const createEntry = gql`
  mutation CreateEntry( 
    $input: CreateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    createEntry(input: $input, condition: $condition) {
          id
          spaceId
          contentSchema
          sys {
            id
          }
          fields
      }
    }
  `;

  const result = await client.mutate({
      mutation: createEntry,
      variables: { input: item },
      fetchPolicy: 'no-cache'
  })

  const log = {
    eventName: 'entryImported',
    spaceId: spaceId,
    entryId: id,
    contentSchema: item.contentSchema,
    userId: userId
  }

  console.log(JSON.stringify(log));

  return result
}

async function processLocale(item, spaceId, userId) {
  const id = await uuidv4()
  item.id = id
  item.spaceId = spaceId
  
  const createLocale = gql`
  mutation CreateLocale( 
    $input: CreateLocaleInput!
    $condition: ModelLocaleConditionInput
  ) {
    createLocale(input: $input, condition: $condition) {
          id
          spaceId
          name
          code
          fallbackCode
          default
          contentManagementApi
          contentDeliveryApi
          optional
          sys {
            id
          }
      }
    }
  `;

  const result = await client.mutate({
      mutation: createLocale,
      variables: { input: item },
      fetchPolicy: 'no-cache'
  })

  const log = {
    eventName: 'localeImported',
    spaceId: spaceId,
    userId: userId,
    localeId: id,
    locale: item.code
  }

  console.log(JSON.stringify(log));

  return result
}

async function storeContentfulImportInfo(item) {
    const createContentfulImport = gql`
    mutation CreateContentfulImport( 
      $input: CreateContentfulImportInput!
      $condition: ModelContentfulImportConditionInput
    ) {
      createContentfulImport(input: $input, condition: $condition) {
        id
        owner
        ownerId
        spaceId
        bucket
        key
      }
    }
  `;

    const result = await client.mutate({
        mutation: createContentfulImport,
        variables: { input: item },
        fetchPolicy: 'no-cache'
    })

    const log = {
      eventName: 'contentfulFileImported',
      spaceId: item.spaceId,
      userId: item.ownerId
    }
  
    console.log(JSON.stringify(log));

    return result
}

async function processContentSchema(item, spaceId, userId) {
  const id = await uuidv4()
  item.id = id
  item.spaceId = spaceId
  item.fields = JSON.stringify(item.fields)
  if(item.description === null) {
    delete item.description
  }

  const createContentSchema = gql`
  mutation CreateContentSchema( 
    $input: CreateContentSchemaInput!
    $condition: ModelContentSchemaConditionInput
  ) {
    createContentSchema(input: $input, condition: $condition) {
      id
      spaceId
      name
      displayField
      description
      sys {
        id
      }
      fields
      }
    }
  `;

  const result = await client.mutate({
      mutation: createContentSchema,
      variables: { input: item },
      fetchPolicy: 'no-cache'
  })

  const log = {
    eventName: 'contentSchemaImported',
    spaceId: spaceId,
    userId: userId,
    schemaId: id,
    schemaName: item.name
  }

  console.log(JSON.stringify(log));

  return result
}

let client = new AWSAppSyncClient({
    url: process.env.API_TACHYONAPI_GRAPHQLAPIENDPOINTOUTPUT,
    region: process.env.REGION,
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: AWS.config.credentials
    },
    disableOffline: true
  });

const Contentful = function () {}

Contentful.prototype.processRecord = async function processRecord(record) {
    const bucketName = record.s3.bucket.name
    const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "))

    const contentfulUpload = await S3.headObject({ Bucket: bucketName, Key: key }).promise()

    const metadata = contentfulUpload.Metadata
    const spaceId = metadata.space_id
    const userId = metadata.owner_id

    const id = uuidv4()
    const item = {
        id: id,
        owner: metadata.owner,
        ownerId: userId,
        spaceId: spaceId,
        bucket: bucketName,
        key: key
    }

    await storeContentfulImportInfo(item)

    const readStream = await S3.getObject({ Bucket: bucketName, Key: key }).createReadStream()
    oboe(readStream)
    .node('editorInterfaces', oboe.drop)
    .node('roles', oboe.drop)
    .node('webhooks', oboe.drop)
    .node('contentTypes.*', function(data){
      processContentSchema(data, spaceId, userId)
      return oboe.drop
    })
    .node('tags.*', function(data){
      // Ignore Space level tags coming from Contenful
      return oboe.drop
    })
    .node('assets.*', async function(data){
      // We need to find an export with assets
      return oboe.drop
    })
    .node('locales.*', function(data){
      processLocale(data, spaceId, userId)
      return oboe.drop
    })
    .node('entries.*', function(data){
      processEntry(data, spaceId, userId)
      return oboe.drop
    })
    .done(function( finalJson ){
      //console.log('Done processing upload')  
    })
}

module.exports = exports = new Contentful()