import { CustomAPIGatewayProxyEvent } from '../types/index.js';
import { success, error } from '../utils/response.js';
import { requireAuth } from '../utils/auth.js';

const helloHandler = async (event: CustomAPIGatewayProxyEvent) => {
  try {
    const { user } = event;
    
    return success({
      message: 'Hello from Serverless!',
      user
    });
  } catch (err) {
    console.error('Error:', err);
    return error(err instanceof Error ? err.message : 'Unknown error');
  }
};

export const handler = requireAuth(helloHandler); 