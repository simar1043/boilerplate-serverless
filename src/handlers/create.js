import { success, error } from '../utils/response.js';
import { requireAuth } from '../utils/auth.js';

const createHandler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { user } = event; // Added by requireAuth
    
    // TODO: Implement your creation logic here
    // You can use user.userId to associate the item with the user
    
    return success({
      message: 'Item created successfully',
      item: {
        ...body,
        userId: user.userId,
      }
    });
  } catch (err) {
    console.error('Error:', err);
    return error(err.message);
  }
};

export const handler = requireAuth(createHandler); 