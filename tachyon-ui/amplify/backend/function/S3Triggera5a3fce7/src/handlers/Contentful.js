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

let client = new AWSAppSyncClient({
    url: process.env.API_TACHYONAPI_GRAPHQLAPIENDPOINTOUTPUT,
    region: process.env.REGION,
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: AWS.config.credentials
    },
    disableOffline: true
  });

const Contentful = function () {};

Contentful.prototype.processRecord = async function processRecord(record) {
    const bucketName = record.s3.bucket.name;
    const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

    console.log('processRecord', JSON.stringify(record))

    const contentfulUpload = await S3.getObject({ Bucket: bucketName, Key: key }).promise()

    const metadata = contentfulUpload.Metadata

    const id = uuidv4()
    const item = {
        id: id,
        owner: metadata.owner,
        ownerId: metadata.owner_id,
        spaceId: metadata.space_id,
        bucket: bucketName,
        key: key
    }

    console.log(JSON.stringify(metadata), JSON.stringify(item))
    await storeContentfulImportInfo(item);
}

module.exports = exports = new Contentful();