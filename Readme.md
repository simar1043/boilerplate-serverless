# Serverless Boilerplate

A boilerplate template for AWS Lambda functions using the Serverless Framework.

## Prerequisites

- Node.js (v18 or later)
- AWS CLI configured with appropriate credentials
- Serverless Framework CLI installed globally (`npm install -g serverless`)

## Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Configure your AWS credentials: `aws configure`
4. Deploy the stack: `npm run deploy`

## Usage

- `npm run start`: Start the serverless offline environment
- `npm run deploy`: Deploy the stack to AWS
- `npm run deploy:prod`: Deploy the stack to AWS with the 'prod' stage
- `npm run remove`: Remove the stack from AWS
