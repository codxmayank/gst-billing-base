// src/app.ts
import Fastify from 'fastify';
import cors from '@fastify/cors';
import authPlugin from './plugins/auth';
import { authRoutes } from './routes/auth.routes';

export const buildApp = async () => {
  const app = Fastify({
    logger: true, // optional: for better visibility
  });

  // Register plugins
  await app.register(cors, {
    origin: '*', // TODO: tighten in production
  });

  await app.register(authPlugin);

  // Register routes
  app.get('/health', async () => ({ ok: true }));
  
  await app.register(authRoutes);

  return app;
}
