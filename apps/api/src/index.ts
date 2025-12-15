import 'dotenv/config';
import Fastify from 'fastify';
import { healthHttpContract } from 'shared';

const server = Fastify();

server.route({
  method: healthHttpContract.method,
  url: healthHttpContract.path,
  handler: async (request, reply) => {
    const requestValidation = healthHttpContract.request.safeParse(request.body ?? {});

    if (!requestValidation.success) {
      request.log.error({ err: requestValidation.error }, 'Health request validation failed');
      return reply.status(400).send({ status: 'error', message: 'Invalid request' });
    }

    const payload = {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };

    const result = healthHttpContract.response.safeParse(payload);

    if (!result.success) {
      request.log.error({ err: result.error }, 'Health payload validation failed');
      return reply
        .status(500)
        .send({ status: 'error', message: 'Health check failed' });
    }

    return result.data;
  },
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
