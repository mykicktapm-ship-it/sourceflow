import 'dotenv/config';
import Fastify from 'fastify';

const server = Fastify();

server.get('/health', async () => ({ status: 'ok' }));

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
