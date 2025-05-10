import { FastifyReply, FastifyRequest } from "fastify";
import { GetUserReqSchema } from "../schemas/user.schema";
import { getUserByIdImpl } from "../services/user.service";

export const getUserController = async (req: FastifyRequest, reply: FastifyReply) => {
  const parsed = GetUserReqSchema.safeParse(req.params);
  if (!parsed.success) {
    return reply.status(400).send({ error: parsed.error.flatten() });
  }

  const { userId } = parsed.data;

  try {
    const user = await getUserByIdImpl(userId);
    return reply.status(200).send({
      message: 'success',
      user
    });
  } catch (err: any) {
    return reply.status(400).send({ error: err.message });
  }
}
