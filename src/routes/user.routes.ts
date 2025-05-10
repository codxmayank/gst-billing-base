import { FastifyInstance } from 'fastify';
import { getUserController } from '../controllers/user.controller';

export const userRoutes = async (app: FastifyInstance) => {
  app.get('/:userId', getUserController);
}
