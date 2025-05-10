import Fastify from 'fastify';
import cors from '@fastify/cors';
// import authPlugin from './plugins/auth';
import { authRoutes } from './routes/auth.routes';
import { userRoutes } from './routes/user.routes';

export const buildApp = async () => {
  const app = Fastify({
    logger: true,
  });

  await app.register(cors, {
    origin: '*',
  });

  // await app.register(authPlugin);

  await app.register(authRoutes);
  await app.register(userRoutes, {
    prefix: '/api/v1/user',
  });
  app.get('/health', async () => ({ ok: true }));

  return app;
}
