import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export interface CustomAPIGatewayProxyEvent extends Omit<APIGatewayProxyEvent, 'requestContext'> {
  user?: UserInfo;
  requestContext: {
    authorizer: {
      claims: {
        sub: string;
        email: string;
        [key: string]: any;
      };
    };
  };
}

export interface UserInfo {
  userId: string;
  email: string;
}

export type LambdaHandler = (event: CustomAPIGatewayProxyEvent) => Promise<APIGatewayProxyResult>; 