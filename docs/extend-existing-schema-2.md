# How To Extend Existing Schema

In this example we'll be adding an owner, ownerId and spaceId property to the Photo object.

## Modify the Model and Schema

It makes sense that all changes to the shape of data start in the schema. 

The `schema.graphql` contains the Amplify/AppSync schema.

### Modify the Model

We need to add owner, ownerId and spaceId fields to the Photo model.
We'll add these as:

```javascript
    spaceId: ID!
    ownerId: ID!
    owner: String!
```

Change: 

```javascript
type Photo
@model
@auth(rules: [
      {allow: owner, operations: [create, update, delete, read]},
      {allow: private, provider: iam}
      ]) {
    id: ID!
    bucket: String!
    fullsize: PhotoS3Info!
    thumbnail: PhotoS3Info!
}
```

to this:

```javascript
type Photo
@model
@auth(rules: [
      {allow: owner, operations: [create, update, delete, read]},
      {allow: private, provider: iam}
      ]) {
    id: ID!
    spaceId: ID!
    ownerId: ID!
    owner: String!
    bucket: String!
    fullsize: PhotoS3Info!
    thumbnail: PhotoS3Info!
}
```

### Update the input schema

This schema is not a `@model`. It represents the shape of the input for a new Photo object. We need to add the same properties here.

This:

```javascript
input CreatePhotoInput {
    id: ID
    owner: String
    bucket: String!
    fullsize: PhotoS3InfoInput!
    thumbnail: PhotoS3InfoInput!
}
```

Becomes:

```javascript
input CreatePhotoInput {
    id: ID
    spaceId: ID!
    ownerId: ID!
    owner: String!
    bucket: String!
    fullsize: PhotoS3InfoInput!
    thumbnail: PhotoS3InfoInput!
}
```

## Update the S3 Trigger Photo Processor

We need to pull these new values from the upload's meta data and include them in the DynamoDB record.

Starting with this:

```javascript
const item = {
    id: id,
    owner: metadata.owner,
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
```

We define the same three properties as above, but map them to meta data variables.

NOTE: Amplify will lowercase the property names.
`spaceId` becomes `spaceid`. We'll make sure the metadat names that get set account for that.

```javascript
const item = {
    id: id,
    spaceId: metadata.space_id,
    ownerId: metadata.owner_id,
    owner: metadata.owner,
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
```

## Update metadata property names

We're expecting `space_id` in the metadata now.
We need to update tyhe frontend to refine those.\






## Deploy to Amplify / AppSync
