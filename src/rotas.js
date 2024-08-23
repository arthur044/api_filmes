import express from 'express';
import filmesController from './controller/filmesController.js';
export default function rotas(server) {
server.use(filmesController);
}