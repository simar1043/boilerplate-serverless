import { response } from '../utils/response.js';
import { requireAuth } from '../utils/auth.js';

const helloHandler = async (event) => {
  try {
    return response(200, {
      message: 'Hello from Serverless!',
      event,
    });
  } catch (error) {
    console.error('Error:', error);
    return response(500, { error: 'Internal Server Error' });
  }
};

export const handler = requireAuth(helloHandler); 