import AWS from 'aws-sdk';
import { success, error } from '../utils/response.js';

const cognito = new AWS.CognitoIdentityServiceProvider();

export const handler = async (event) => {
  try {
    const { path } = event;
    const body = JSON.parse(event.body);

    if (path.endsWith('/signup')) {
      return handleSignup(body);
    } else if (path.endsWith('/signin')) {
      return handleSignin(body);
    }

    return error('Invalid auth endpoint', 400);
  } catch (err) {
    console.error('Error:', err);
    return error(err.message);
  }
};

async function handleSignup({ email, password }) {
  try {
    const params = {
      ClientId: process.env.USER_POOL_CLIENT_ID,
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: 'email',
          Value: email,
        },
      ],
    };

    const result = await cognito.signUp(params).promise();
    return success({
      message: 'User signed up successfully',
      userId: result.UserSub,
    });
  } catch (err) {
    return error(err.message, 400);
  }
}

async function handleSignin({ email, password }) {
  try {
    const params = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: process.env.USER_POOL_CLIENT_ID,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    };

    const result = await cognito.initiateAuth(params).promise();
    return success({
      message: 'User signed in successfully',
      tokens: {
        accessToken: result.AuthenticationResult.AccessToken,
        refreshToken: result.AuthenticationResult.RefreshToken,
        idToken: result.AuthenticationResult.IdToken,
      },
    });
  } catch (err) {
    return error(err.message, 401);
  }
} 