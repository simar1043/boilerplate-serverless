export const response = (statusCode, body) => ({
    statusCode,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
});
export const success = (data) => response(200, data);
export const created = (data) => response(201, data);
export const error = (message, statusCode = 500) => response(statusCode, { error: message });
