/* Amplify Params - DO NOT EDIT
    API_TACHYONAPI_GRAPHQLAPIENDPOINTOUTPUT
    API_TACHYONAPI_GRAPHQLAPIIDOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT */// eslint-disable-next-line
require('es6-promise').polyfill()
require('isomorphic-fetch')
const AWS = require('aws-sdk')
const S3 = new AWS.S3({ signatureVersion: 'v4' })
const AUTH_TYPE = require('aws-appsync').AUTH_TYPE;
const AWSAppSyncClient = require('aws-appsync').default
const uuidv4 = require('uuid/v4')
const gql = require('graphql-tag');

const Sharp = require('sharp');

// We'll expect these environment variables to be defined when the Lambda function is deployed
const THUMBNAIL_WIDTH = parseInt(process.env.THUMBNAIL_WIDTH || 80, 10);
const THUMBNAIL_HEIGHT = parseInt(process.env.THUMBNAIL_HEIGHT || 80, 10);

let client = new AWSAppSyncClient({
    url: process.env.API_TACHYONAPI_GRAPHQLAPIENDPOINTOUTPUT,
    region: process.env.REGION,
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: AWS.config.credentials
    },
    disableOffline: true
  });

async function storePhotoInfo(item) {
    const createPhoto = gql`
    mutation CreatePhoto( 
      $input: CreatePhotoInput!
      $condition: ModelPhotoConditionInput
    ) {
      createPhoto(input: $input, condition: $condition) {
        id
        owner
        ownerId
        spaceId
        bucket
        fullsize {
          key
          width
          height
        }
        thumbnail {
          key
          width
          height
        }
      }
    }
  `;

    const result = await client.mutate({
        mutation: createPhoto,
        variables: { input: item },
        fetchPolicy: 'no-cache'
    })

    return result
}

function thumbnailKey(keyPrefix, filename) {
    return `${keyPrefix}/resized/${filename}`;
}

function fullsizeKey(keyPrefix, filename) {
    return `${keyPrefix}/fullsize/${filename}`;
}

function makeThumbnail(photo) {
    return Sharp(photo).resize(THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT).toBuffer();
}

async function resize(photoBody, bucketName, key) {
    const keyPrefix = key.substr(0, key.indexOf('/upload/'))
    const originalPhotoName = key.substr(key.lastIndexOf('/') + 1)
    const originalPhotoDimensions = await Sharp(photoBody).metadata();

    const thumbnail = await makeThumbnail(photoBody);

    await Promise.all([
        S3.putObject({
            Body: thumbnail,
            Bucket: bucketName,
            Key: thumbnailKey(keyPrefix, originalPhotoName),
        }).promise(),

        S3.copyObject({
            Bucket: bucketName,
            CopySource: bucketName + '/' + key,
            Key: fullsizeKey(keyPrefix, originalPhotoName),
        }).promise(),
    ]);

    await S3.deleteObject({
        Bucket: bucketName,
        Key: key
    }).promise();

    return {
        photoId: originalPhotoName,

        thumbnail: {
            key: thumbnailKey(keyPrefix, originalPhotoName),
            width: THUMBNAIL_WIDTH,
            height: THUMBNAIL_HEIGHT
        },

        fullsize: {
            key: fullsizeKey(keyPrefix, originalPhotoName),
            width: originalPhotoDimensions.width,
            height: originalPhotoDimensions.height
        }
    };
};
const Photo = function () {};

Photo.prototype.processRecord = async function processRecord(record) {
    const bucketName = record.s3.bucket.name;
    const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

    const originalPhoto = await S3.getObject({ Bucket: bucketName, Key: key }).promise()

    const metadata = originalPhoto.Metadata
    const sizes = await resize(originalPhoto.Body, bucketName, key);
    const id = uuidv4()
    const item = {
        id: id,
        owner: metadata.owner,
        ownerId: metadata.owner_id,
        spaceId: metadata.space_id,
        bucket: bucketName,
        thumbnail: {
            width: sizes.thumbnail.width,
            height: sizes.thumbnail.height,
            key: sizes.thumbnail.key,
        },
        fullsize: {
            width: sizes.fullsize.width,
            height: sizes.fullsize.height,
            key: sizes.fullsize.key,
        }
    }

    await storePhotoInfo(item);

    const log = {
        eventName: 'uploadedPhotoProcessed',
        spaceId: spaceId,
        photoId: id
    }

    console.log(JSON.stringify(log));
}

module.exports = exports = new Photo();
