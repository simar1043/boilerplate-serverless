import { CustomAPIGatewayProxyEvent } from '../../types/index.js';
import { success, error } from '../../utils/response.js';
import { requireAuth } from '../../utils/auth.js';

const getHandler = async (event: CustomAPIGatewayProxyEvent) => {
  try {
    const { id } = event.pathParameters || {};
    
    if (!id) {
      return error('ID is required', 400);
    }
    
    // TODO: Implement your get user logic here
    
    return success({
      message: 'User retrieved successfully',
      id
    });
  } catch (err) {
    console.error('Error:', err);
    return error(err instanceof Error ? err.message : 'Unknown error');
  }
};

export const handler = requireAuth(getHandler); 