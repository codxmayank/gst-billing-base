// src/routes/auth.routes.ts
import { FastifyInstance } from 'fastify';
import { signupController, loginController } from '../controllers/auth.controller';

export const authRoutes = async (app: FastifyInstance) => {
  app.post('/api/v1/auth/signup', signupController);
  app.post('/api/v1/auth/login', loginController);
}
