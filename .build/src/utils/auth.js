import { error } from './response.js';
export const getUserFromEvent = (event) => {
    try {
        const { claims } = event.requestContext.authorizer;
        return {
            userId: claims.sub,
            email: claims.email,
        };
    }
    catch (err) {
        console.error('Error getting user from event:', err);
        return null;
    }
};
export const requireAuth = (handler) => {
    return async (event) => {
        const user = getUserFromEvent(event);
        if (!user) {
            return error('Unauthorized', 401);
        }
        event.user = user;
        return handler(event);
    };
};
