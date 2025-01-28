import { success, error } from '../utils/response.js';
import { requireAuth } from '../utils/auth.js';

const readHandler = async (event) => {
  try {
    const { id } = event.pathParameters || {};
    
    if (!id) {
      return error('ID is required', 400);
    }
    
    return success({
      message: 'Item retrieved successfully',
      id
    });
  } catch (err) {
    console.error('Error:', err);
    return error(err.message);
  }
};

export const handler = requireAuth(readHandler); 