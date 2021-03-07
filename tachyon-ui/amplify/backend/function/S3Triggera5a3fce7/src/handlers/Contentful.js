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

async function processLocale(item, spaceId) {
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

  console.log('trying to create Locale with input', JSON.stringify(item))
  const result = await client.mutate({
      mutation: createLocale,
      variables: { input: item },
      fetchPolicy: 'no-cache'
  })

  console.log('result', JSON.stringify(result))
  return result
}

async function storeContentfulImportInfo(item) {
    console.log('ContentfulImportItem', JSON.stringify(item))
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

    console.log('trying to create contentful import with input', JSON.stringify(item))
    const result = await client.mutate({
        mutation: createContentfulImport,
        variables: { input: item },
        fetchPolicy: 'no-cache'
    })

    console.log('result', JSON.stringify(result))
    return result
}

async function processContentSchema(item, spaceId) {
  const id = await uuidv4()
  item.id = id
  item.spaceId = spaceId
  item.fields = JSON.stringify(item.fields)
  if(item.description === null) {
    delete item.description
  }
  //console.log('ContentSchema', JSON.stringify(item))
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

  console.log('trying to create ContentSchema with input', JSON.stringify(item))
  const result = await client.mutate({
      mutation: createContentSchema,
      variables: { input: item },
      fetchPolicy: 'no-cache'
  })

  console.log('result', JSON.stringify(result))
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

    console.log('processRecord', JSON.stringify(record))

    const contentfulUpload = await S3.headObject({ Bucket: bucketName, Key: key }).promise()

    console.log(contentfulUpload)

    const metadata = contentfulUpload.Metadata
    const spaceId = metadata.space_id

    const id = uuidv4()
    const item = {
        id: id,
        owner: metadata.owner,
        ownerId: metadata.owner_id,
        spaceId: spaceId,
        bucket: bucketName,
        key: key
    }

    console.log(JSON.stringify(metadata), JSON.stringify(item))
    await storeContentfulImportInfo(item)

    const readStream = await S3.getObject({ Bucket: bucketName, Key: key }).createReadStream()
    oboe(readStream)
    .node('editorInterfaces', oboe.drop)
    .node('roles', oboe.drop)
    .node('webhooks', oboe.drop)
    .node('contentTypes.*', function(data){
      console.log(data)
      processContentSchema(data, spaceId)
      return oboe.drop
    })
    .node('tags.*', function(data){
      console.log(data)
      // Ignore Space level tags coming from Contenful
      return oboe.drop
    })
    .node('assets.*', async function(data){
      console.log(data)
      // We need to find an export with assets
      return oboe.drop
    })
    .node('locales.*', function(data){
      console.log(data)
      processLocale(data, spaceId)
      return oboe.drop
    })
    .node('entries.*', function(data){
      console.log(data)
      return oboe.drop
    })
    .done(function( finalJson ){
      console.log('done')  
    })
}

module.exports = exports = new Contentful()