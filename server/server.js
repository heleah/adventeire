import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());

server.get('/', (req, res) => res.json('Server is running!'));

server.listen(4000);
