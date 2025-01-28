import { success, error } from '../utils/response.js';
import { requireAuth } from '../utils/auth.js';

const listHandler = async (event) => {
  try {
    const { limit = 10, nextToken } = event.queryStringParameters || {};
    
    return success({
      message: 'Items retrieved successfully',
      items: [],
      limit,
      nextToken
    });
  } catch (err) {
    console.error('Error:', err);
    return error(err.message);
  }
};

export const handler = requireAuth(listHandler); 