import { FastifyInstance } from 'fastify';
import { getUserController } from '../controllers/user.controller';
import { authenticate } from '../plugins/auth';

export const userRoutes = async (app: FastifyInstance) => {
  app.get('/:userId', authenticate(getUserController));
}
