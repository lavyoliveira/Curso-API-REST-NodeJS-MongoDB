import express from 'express';
import AutorController from '../controllers/autoresController.js';
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

router
    .get('/autores/busca', LivroController.listarLivrosPorEditora)
    .get('/autores', AutorController.listarAutores)
    .get('/autores/:id', AutorController.listarAutoresPorId)
    .post('/autores', AutorController.cadastrarAutores)
    .put('/autores/:id', AutorController.atualizarAutor)
    .delete('/autores/:id', AutorController.excluirAutor)

export default router;