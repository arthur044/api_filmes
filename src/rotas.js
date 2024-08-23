import express from 'express';
const app = express();
app.use(express.json());
import filmesController from './controller/filmesController.js';
export default function rotas(server) {
server.use(filmesController);
}