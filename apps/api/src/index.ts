import 'dotenv/config';
import Fastify from 'fastify';
import { healthSchema } from 'shared';

const server = Fastify();

server.get('/health', async (request, reply) => {
  const payload = {
    status: 'ok',
    timestamp: new Date().toISOString(),
  };

  const result = healthSchema.safeParse(payload);

  if (!result.success) {
    request.log.error({ err: result.error }, 'Health payload validation failed');
    return reply.status(500).send({ status: 'error', message: 'Health check failed' });
  }

  return result.data;
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
