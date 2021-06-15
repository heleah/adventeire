import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import dirname from './lib/pathHelpers.js';

import sightsRoutes from './routes/sights.routes.js';

const __dirname = dirname(import.meta.url);

dotenv.config();

const connectionString =
  process.env.DB_CONNECTION || 'mongodb://localhost:27017/adventeire';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.set('returnOriginal', false);

const server = express();

server.use(cors());
server.use(express.json());

server.get('/health', (req, res) =>
  res.json({ message: 'Server is running!' })
);

server.use(sightsRoutes);

server.use(express.static(path.join(__dirname, '../client/build')));
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const port = process.env.PORT || 4000;
server.listen(port);
