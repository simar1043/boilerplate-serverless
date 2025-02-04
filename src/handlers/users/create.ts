import { CustomAPIGatewayProxyEvent } from '../../types/index.js';
import { success, error } from '../../utils/response.js';
import { requireAuth } from '../../utils/auth.js';

interface CreateUserPayload {
  name: string;
  email: string;
  // Add other user fields as needed
}

const createHandler = async (event: CustomAPIGatewayProxyEvent) => {
  try {
    const body = JSON.parse(event.body || '{}') as CreateUserPayload;
    const { user } = event;
    
    // TODO: Implement your creation logic here
    
    return success({
      message: 'User created successfully',
      item: {
        ...body,
        userId: user?.userId,
      }
    });
  } catch (err) {
    console.error('Error:', err);
    return error(err instanceof Error ? err.message : 'Unknown error');
  }
};

export const handler = requireAuth(createHandler); 