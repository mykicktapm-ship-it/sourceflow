import 'dotenv/config';
import Fastify from 'fastify';
import type { HealthResponse } from 'shared';
import { healthHttpContract } from 'shared';

import { registerHttpContractRoute } from './contractRoutes';

const server = Fastify();

registerHttpContractRoute({
  server,
  contract: healthHttpContract,
  handler: async (): Promise<HealthResponse> => ({
    status: 'ok',
    timestamp: new Date().toISOString(),
  }),
});

const port = Number(process.env.API_PORT) || 3000;

const start = async () => {
  try {
    await server.listen({ port, host: '0.0.0.0' });
    console.log(`API server running on http://localhost:${port}`);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
