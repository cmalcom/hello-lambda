const cdk = require('@aws-cdk/core');
const lambda = require('@aws-cdk/aws-lambda');
const path = require('path');

class CdkStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // lambda deploying ONLY the bundle.js file
    const codePath = path.join(__dirname, "../../src/hey/");
    const fn = new lambda.Function(this, "MyLambda", {
      runtime: lambda.Runtime.NODEJS_12_X,
      // handler: "src/hey/bundle.handler",
      handler: "bundle.handler",
      code: lambda.Code.fromAsset(codePath, {
        
        exclude: ["handler.js"],
        // file: "bundle.js"
      }),
    });
  }
}

module.exports = { CdkStack }
