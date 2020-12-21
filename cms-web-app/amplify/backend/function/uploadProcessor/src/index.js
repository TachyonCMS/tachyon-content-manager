/* Amplify Params - DO NOT EDIT
	API_CMSWEBAPP_ALBUMTABLE_ARN
	API_CMSWEBAPP_ALBUMTABLE_NAME
	API_CMSWEBAPP_CONTENTTYPETABLE_ARN
	API_CMSWEBAPP_CONTENTTYPETABLE_NAME
	API_CMSWEBAPP_ENTRYTABLE_ARN
	API_CMSWEBAPP_ENTRYTABLE_NAME
	API_CMSWEBAPP_GRAPHQLAPIIDOUTPUT
	API_CMSWEBAPP_LOCALETABLE_ARN
	API_CMSWEBAPP_LOCALETABLE_NAME
	API_CMSWEBAPP_PHOTOTABLE_ARN
	API_CMSWEBAPP_PHOTOTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
