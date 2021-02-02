const cdk = require('@aws-cdk/core');
const lambda = require('@aws-cdk/aws-lambda');
const path = require('path');

class CdkStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // lambda
    const fn = new lambda.Function(this, "MyLambda", {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "src/hey/handler.hello",
      code: lambda.Code.fromAsset(path.join(__dirname, "../../"), {
        exclude: ["cdk"],
      }),
    });
  }
}

module.exports = { CdkStack }
