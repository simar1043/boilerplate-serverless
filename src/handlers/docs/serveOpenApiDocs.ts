import { CustomAPIGatewayProxyEvent } from '../../types/index.js';
import { success, error } from '../../utils/response.js';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handler = async (event: CustomAPIGatewayProxyEvent) => {
  try {
    const docsPath = path.join(__dirname, '../../docs/openapi.yml');
    const openApiSpec = fs.readFileSync(docsPath, 'utf8');
    
    return success({
      openApiSpec
    });
  } catch (err) {
    console.error('Error serving OpenAPI docs:', err);
    return error(err instanceof Error ? err.message : 'Failed to serve API documentation');
  }
}; 