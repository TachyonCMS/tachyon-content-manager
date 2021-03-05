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

class ContentfulImporter {
    constructor() {

    }

    // Process an S3 record representing an uploaded Contentful export  
    async processRecord(record) {
        
        console.log(record)

        console.log('Processing Contentful Import.')
    }
}

export default new ContentfulImporter()