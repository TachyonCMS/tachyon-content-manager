# Tachyon CMS - Amplify based CMS

## Create Vue project

```bash
vue create tachyon-ui
```

Choose Vue 2, I'll move to Vue 3 "soon".

```bash
Please pick a preset: Default ([Vue 2] babel, eslint)
```

### Start the app

```bash
cd tachyon-ui
npm run serve
```

## Create the UI

### Install Vuetify

```bash
vue add vuetify
```

Use the default Vuetify install for the best functionality.


## Install Vue Router


```bash
vue add router
```

Don't use history mode

```bash
Use history mode for router? (Requires proper server setup for index fallback in production) No
```


## Create an Amplify TypeScript application

```bash
amplify init
```

```bash
Scanning for plugins...
Plugin scan successful
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project auditactivityapp
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

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use (Use arrow keys)
❯ default 
```


## Add Amplify AppSync GraphQL API

### Define our GraphQL Schema

### Add GraphQL API via Amplify CLI

```bash
amplify add api
```

### Add File Storage

### Use CLI to define S3 Storage

```bash
amplify add storage
```

#### Do NOT add a trigger Lambda


