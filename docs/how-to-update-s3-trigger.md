# Editing an Amplify S3 Trigger

## File Location

The Trigger function will have its own directory in `/backend/function/*`.

## Updating packages

If the change requires new packages you need to update the `package.json` and delete the `package-lock.json`.
You can edit the file manually or run `npm install <package name>` in the function's directory.

## Edit code

The code is in the `index.js` file.

## Handle different file types

The directory path after `/upload/` defines the file type.
Each file type has a handler defined.
The `index.js` file maps the file type to a handler.
The handlers are in the function's `/handlers` directory.
If the handlers need additonal modules they should be loaded in the function's `package.json`.

## Set the Node version

The function directory root will have an `S3Trigger*-cloudformation-template.json` file.

```cloudformation
"Role": {
          "Fn::GetAtt": [
            "LambdaExecutionRole",
            "Arn"
          ]
        },
        "Runtime": "nodejs12.x",
```

## Testing S3 Lambda Trigger locally

You need to mock the various pieces

```bash
amplify mock api
amplify mock storage
```

## Switch mock API back to AWS API

Change:

```
schemaPath: amplify/backend/api/tachyonapi/build/schema.graphql
```

back to:

```
schemaPath: src/graphql/schema.json
```


