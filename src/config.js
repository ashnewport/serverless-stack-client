export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: 'pk_test_sLxxWI4KI4JtTsODhxyTFPWl00AdLVey5g',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'serverless-stack-notes-app-uploads-ash',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://yg3m5e4sv2.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_9AAnIprf6',
    APP_CLIENT_ID: '3acjhhbqfmni0k520oo75t6iqm',
    IDENTITY_POOL_ID: 'us-east-1:b9d0bd58-dcc8-4656-a1ed-1d3c84c4ba8d',
  },
};
