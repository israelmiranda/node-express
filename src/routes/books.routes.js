import express from 'express';
import bookController from '../controllers/book.controller.js';

const routes = express.Router();

routes.get('/books', bookController().list);
routes.get('/books/:id', bookController().find);
routes.post('/books', bookController().create);
routes.put('/books/:id', bookController().update);
routes.delete('/books/:id', bookController().remove);

export default routes;