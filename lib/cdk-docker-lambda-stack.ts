import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import path = require('path');
import { Duration } from 'aws-cdk-lib';


export class CdkDockerLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.DockerImageFunction(this, 'docker-lambda-function', {
      functionName: "docker-lambda-fn",
      code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, '../lambdas')),
      memorySize: 512,
      timeout: Duration.minutes(2),
      description: "This is dockerized AWS Lambda function"
    });
  }
}
