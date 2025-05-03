import Fastify from 'fastify';
import jwt from '@fastify/jwt';
import dotenv from 'dotenv';
import { db } from './utils/db.js';

dotenv.config();

const app = Fastify();

app.register(jwt, {
  secret: process.env.JWT_SECRET!,
});

app.get('/health', async () => ({ ok: true }));

app.listen({ port: 3000 }, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('🚀 Core API running on http://localhost:3000');
});
