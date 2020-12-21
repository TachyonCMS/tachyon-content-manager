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

```bash
amplify push
✔ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name  | Operation | Provider plugin   |
| -------- | -------------- | --------- | ----------------- |
| Api      | cmsapp         | Create    | awscloudformation |
| Auth     | cmsappd3663833 | No Change | awscloudformation |
? Are you sure you want to continue? Yes

GraphQL schema compiled successfully.

Edit your schema at /home/brian/sandbox/tachyon-content-manager/cms-app/amplify/backend/api/cmsapp/schema.graphql or place .graphql files in a directory at /home/brian/sandbox/tachyon-content-manager/cms-app/amplify/backend/api/cmsapp/schema
? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target javascript
? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.js
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
```

## Add Amplify S3 Storage

```bash
amplify add storage
```

Choose these options:

```bash
? Please select from one of the below mentioned services: Content (Images, audio, video, etc.)
? Please provide a friendly name for your resource that will be used to label this category in the project: cmsfiles
? Please provide bucket name: tachyon-cms-files
? Who should have access: Auth users only
? What kind of access do you want for Authenticated users? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ create/update
 ◉ read
 ◉ delete
 ? Do you want to add a Lambda Trigger for your S3 Bucket? Yes
? Select from the following options 
  Choose an existing function from the project 
❯ Create a new function 
Successfully added resource S3Trigger711d2e6f locally
? Do you want to edit the local S3Trigger711d2e6f lambda function now? No
Successfully added resource cmsfiles locally
```

### Grant S3 Trigger Function access to API

```bash
amplify update function
```

Now with lambda layers available you have to choose Lambda function.

```bash
? Select which capability you want to update: (Use arrow keys)
❯ Lambda function (serverless function) 
  Lambda layer (shared code & resource used across functions) 
```

Select the trigger function created when adding S3 Storage to Amplify.

```bash
? Select the Lambda function you want to update S3Trigger711d2e6f
General information
| Name: S3Trigger711d2e6f
| Runtime: nodejs
```

Choose to update the Resource acess permissions.

```bash
? Which setting do you want to update? (Use arrow keys)
❯ Resource access permissions 
  Scheduled recurring invocation 
  Lambda layers configuration 
```

Choose to edit the API category.

```bash
? Select the category 
 ◯ auth
❯◉ api
 ◯ function
 ◯ storage
 ```

 Choose all the auth options. (press `a` to select all)

 ```bash
? Select the operations you want to permit for cmsapp (Press <space> to select, <a> to toggle all, <i> to invert sel
ection)
❯◉ create
 ◉ read
 ◉ update
 ◉ delete
 ```

 Note:

 ```bash
 You can access the following resource attributes as environment variables from your Lambda function
        API_CMSAPP_GRAPHQLAPIENDPOINTOUTPUT
        API_CMSAPP_GRAPHQLAPIIDOUTPUT
```

Skip editing the Lambda for now.

```bash
Do you want to edit the local lambda function now? (y/N) n
```

### Update API to supp[ort IAM Auth from Lambda]

```bash
amplify update api
```

Select GraphQL.

```bash
? Please select from one of the below mentioned services: (Use arrow keys)
❯ GraphQL 
  REST 
```

Select "Update auth settings".

```bash
? Select from the options below 
  Walkthrough all configurations 
❯ Update auth settings 
  Enable DataStore for entire API 
```

*Keep Amazon Cognito User Pool as the default*

```bash
? Choose the default authorization type for the API (Use arrow keys)
  API key 
❯ Amazon Cognito User Pool 
  IAM 
  OpenID Connect 
```

Configure additional auth types to add IAM auth for the Lambda.

```bash
? Configure additional auth types? (y/N) y
? Choose the additional authorization types you want to configure for the API 
 ◯ API key
❯◉ IAM
 ◯ OpenID Connect
```

### Push S3 Lambda trigger auth changes to AWS

```bash
amplify push
```

```bash
✔ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name     | Operation | Provider plugin   |
| -------- | ----------------- | --------- | ----------------- |
| Function | S3Trigger711d2e6f | Update    | awscloudformation |
| Auth     | cmsappd3663833    | No Change | awscloudformation |
| Api      | cmsapp            | No Change | awscloudformation |
| Storage  | cmsfiles          | No Change | awscloudformation |
? Are you sure you want to continue? Yes
```

## Install Vue Router

```bash
vue add router
```

Use these options:

```bash
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) n
```

## Install Vue Material Design Bootstrap

```bash
vue add mdb
```

Use these options:

```bash
? Please choose type of installation: 
  New app 
❯ Existing app 
? Free or Pro version? (Use arrow keys)
❯ Free 
  Basic 
  Pro 
? Select the styling option: 
  Compiled in the mdbvue package (CSS) 
❯ Editable in your project (SCSS) 
? Add Roboto font? Yes
? Add Font Awesome 5? Yes
```

## Install Vue and JS modules 

```bash
npm install --save \
@aws-amplify/ui-vue, \
aws-amplify, \
vue-web-cam
```
