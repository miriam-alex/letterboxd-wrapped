/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// snippet-start:[cross-service.lambda-from-browser.JavaScript.lambdaClient]
import { LambdaClient } from "@aws-sdk/client-lambda";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";

// An Amazon Cognito Identity Pool ID. Replace with the identity pool ID created
// for this example.
const IDENTITY_POOL_ID = "us-east-2:64d44740-1f28-433f-b221-4681d7a62848";
// An Amazon Cognito Region. Replace with the region that is hosting the resources for this example.
const REGION = "us-east-2";

// Create an Amazon DynamoDB client service object that initializes the Amazon Cognito credentials provider.
const lambdaClient = new LambdaClient({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID,
  }),
});
export { lambdaClient };
// snippet-end:[cross-service.lambda-from-browser.JavaScript.lambdaClient]