import { CustomAPIGatewayProxyEvent } from '../../types/index.js';
import { success, error } from '../../utils/response.js';
import { requireAuth } from '../../utils/auth.js';

const listHandler = async (event: CustomAPIGatewayProxyEvent) => {
  try {
    const { limit = '10', nextToken } = event.queryStringParameters || {};
    
    // TODO: Implement your list users logic here
    
    return success({
      message: 'Users retrieved successfully',
      items: [],
      limit: parseInt(limit),
      nextToken
    });
  } catch (err) {
    console.error('Error:', err);
    return error(err instanceof Error ? err.message : 'Unknown error');
  }
};

export const handler = requireAuth(listHandler); 