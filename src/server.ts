// src/server.ts
import dotenv from 'dotenv';
import { buildApp } from './app';

dotenv.config();

const PORT = Number(process.env.PORT || 3000);

const startServer = async () => {
  const app = await buildApp();

  try {
    await app.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startServer();
