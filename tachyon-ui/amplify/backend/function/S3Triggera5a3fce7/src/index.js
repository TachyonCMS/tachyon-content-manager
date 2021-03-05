/* Amplify Params - DO NOT EDIT
	API_TACHYONAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_TACHYONAPI_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */// eslint-disable-next-line
require('es6-promise').polyfill();
require('isomorphic-fetch');
const AWS = require('aws-sdk');
const S3 = new AWS.S3({ signatureVersion: 'v4' });
const AUTH_TYPE = require('aws-appsync').AUTH_TYPE;
const AWSAppSyncClient = require('aws-appsync').default;

const Photo = require('handlers/Photo')

let client = null

async function processRecord(record) {
  const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

  console.log('processRecord', JSON.stringify(record))

  if (record.eventName !== "ObjectCreated:Put") { console.log('Is not a new file'); return; }

  // We need to ensure `/upload/` and other key segments are in their exact positions.
  // We don't want matching sub folder or file names to cause problems.
  // Example key: private/us-east-xxxxxx/upload/photo/my-vacation-photo.png
  const keyParts = key.split('/')
  console.log('keyParts', keyParts)

  if (keyParts[2] != 'upload') { console.log('This is not a user uploaded file'); return; }
  const uploadType = keyParts[3]

  switch (uploadType) {
      case 'photo':
          { console.log('A photo was uploaded') }
          Photo.processRecord(record)
          break;
      case 'contentful':
          { console.log('A Contenful export was uploaded') }
          Contentful.processRecord(record)
          break;
      case 'file':
          { console.log('A file was uploaded') }
          break;
      default:
          { console.log('Unsupported upload type:' + uploadType); return; }
  }
}


exports.handler = function(event, context, callback) {
  console.log('Received S3 event:', JSON.stringify(event, null, 2));
  // Get the object from the event and show its content type
  client = new AWSAppSyncClient({
    url: process.env.API_TACHYONAPI_GRAPHQLAPIENDPOINTOUTPUT,
    region: process.env.REGION,
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: AWS.config.credentials
    },
    disableOffline: true
  });
 
	try {
		event.Records.forEach(processRecord);
		callback(null, { status: 'Upload Processed' });
	}
	catch (err) {
		console.error(err);
		callback(err);
	}
};