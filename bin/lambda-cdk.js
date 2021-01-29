#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CdkProjPipelineLambdaStack } = require('../lambda-stack');

const { stackConfig } = require('./stack-config');
const app = new cdk.App();

const currentEnvironment= 'dev';
const envParams = app.node.tryGetContext('nweaEnvs')[currentEnvironment];
const stackProps = stackConfig[currentEnvironment];

// environment level TAG to add to all resources
cdk.Tags.of(app).add("stack-team-support-email", envParams.supportEmail);

const theLambdaStack = new CdkProjPipelineLambdaStack(app, 
    `nwea-stack-${stackProps.environmentLabel}-pipeline-lambda`, 
    {
        ...stackProps, 
        env: envParams
    });

app.synth(); //eliminates the need to do this manually.  "cdk ls" will then synth