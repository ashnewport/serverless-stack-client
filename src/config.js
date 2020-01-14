const dev = {
  STRIPE_KEY: 'pk_test_sLxxWI4KI4JtTsODhxyTFPWl00AdLVey5g',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'serverless-stack-notes-app-2-ap-attachmentsbucket-w942bz1zozn9',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://kalxem4ch0.execute-api.us-east-1.amazonaws.com/dev',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_FIxnMnXCH',
    APP_CLIENT_ID: '7rur2mknvpp26r6vqoout1m1cp',
    IDENTITY_POOL_ID: 'us-east-1:44e73594-49a0-4744-b0f3-9d69cdcc2344',
  },
};

const prod = {
  STRIPE_KEY: 'pk_test_sLxxWI4KI4JtTsODhxyTFPWl00AdLVey5g',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'serverless-stack-notes-app-2-ap-attachmentsbucket-7wogldwgy5v7',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://fp1c1mld4b.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_x5fWHUApJ',
    APP_CLIENT_ID: '48alcnmjh8ld1o3nr16rq5sa0t',
    IDENTITY_POOL_ID: 'us-east-1:f43ea182-d65a-48cf-9bf9-3e050bd1a6d6',
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
