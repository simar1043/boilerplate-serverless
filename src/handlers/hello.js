const response = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  try {
    return response(200, {
      message: 'Hello from Serverless!',
      event,
    });
  } catch (error) {
    console.error('Error:', error);
    return response(500, { error: 'Internal Server Error' });
  }
}; 