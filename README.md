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

```

## Add Amplify GraphQL API

## Add Amplify S3 Storage

### Update Function perms

### Update API perms
