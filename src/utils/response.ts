import { APIGatewayProxyResult } from 'aws-lambda';

export const response = (statusCode: number, body: any): APIGatewayProxyResult => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(body),
});

export const success = (data: any): APIGatewayProxyResult => response(200, data);
export const created = (data: any): APIGatewayProxyResult => response(201, data);
export const error = (message: string, statusCode = 500): APIGatewayProxyResult => 
  response(statusCode, { error: message }); 