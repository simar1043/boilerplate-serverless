import { error } from './response.js';

export const getUserFromEvent = (event) => {
  try {
    // Cognito adds user information to the requestContext.authorizer
    const { claims } = event.requestContext.authorizer;
    
    return {
      userId: claims.sub,
      email: claims.email,
      // Add any other claims you want to use
    };
  } catch (err) {
    console.error('Error getting user from event:', err);
    return null;
  }
};

export const requireAuth = (handler) => {
  return async (event, context) => {
    const user = getUserFromEvent(event);
    
    if (!user) {
      return error('Unauthorized', 401);
    }
    
    // Add user to event for handlers to use
    event.user = user;
    return handler(event, context);
  };
}; 