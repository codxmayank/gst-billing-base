export const signToken = (fastify, payload) => {
    return fastify.jwt.sign(payload);
};
export const verifyToken = async (fastify, token) => {
    return fastify.jwt.verify(token);
};
