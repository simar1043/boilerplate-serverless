import { success, error } from '../utils/response.js';
import { requireAuth } from '../utils/auth.js';

const updateHandler = async (event) => {
  try {
    const { id } = event.pathParameters || {};
    const body = JSON.parse(event.body);
    
    if (!id) {
      return error('ID is required', 400);
    }
    
    return success({
      message: 'Item updated successfully',
      id,
      updates: body
    });
  } catch (err) {
    console.error('Error:', err);
    return error(err.message);
  }
};

export const handler = requireAuth(updateHandler); 