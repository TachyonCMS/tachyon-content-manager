# Tachyon CMS - Amplify based CMS

## Create Vue project

```bash
vue create cms-app
```

Choose Vue 2, I'll move to Vue 3 "soon".

```bash
Please pick a preset: Default ([Vue 2] babel, eslint)
```

## Initialize Amplify

```bash
cd cms-app
amplify init
```

Use this project config:

```bash
? Enter a name for the project cmsapp
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using vue
? Source Directory Path:  src
? Distribution Directory Path: dist
? Build Command:  npm run-script build
? Start Command: npm run-script serve 
Using default provider  awscloudformation
? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
```

## Add Amplify Auth

```bash
amplify add auth
```

Choose these auth options:

```bash
 Do you want to use the default authentication and security configuration? Default configuration
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
```

### Push Auth to AWS

```bash
amplify push
```

## Add Amplify GraphQL API

### Add API via CLI

```bash
amplify add api
```

Use these options:

```bash
? Please select from one of the below mentioned services: GraphQL
? Provide API name: cmsapp
? Choose the default authorization type for the API Amazon Cognito 
User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API No
, I am done.
? Do you have an annotated GraphQL schema? No
? Choose a schema template: One-to-many relationship (e.g., “Blogs” with “Posts” and “Comments”)
```

Use this simple schema to start.

```javascript
type Space 
@model
@auth(rules: [{ allow: owner, operations: [create, update, delete, read] }]) {
    id: ID!
    name: String!
}

type Album 
@model 
@auth(rules: [{allow: owner, operations: [create, update, delete, read]}]) {
    id: ID!
    name: String!
    photos: [Photo] @connection(keyName: "byAlbum", fields: ["id"])
}

type Photo 
@model 
@key(name: "byAlbum", fields: ["albumId"], queryField: "listPhotosByAlbum")
@auth(rules: [{allow: owner, operations: [create, update, delete, read]}]) {
    id: ID!
    albumId: ID!
    album: Album @connection(fields: ["albumId"])
    bucket: String!
    fullsize: PhotoS3Info!
    thumbnail: PhotoS3Info!
}

type PhotoS3Info {
    key: String!
    width: Int!
    height: Int!
}
```

### Push API to AWS

```bash
amplify push
```

## Add Amplify S3 Storage

### Update Function perms

### Update API perms

### Push S3 Storage changesto AWS

```bash
amplify push
```