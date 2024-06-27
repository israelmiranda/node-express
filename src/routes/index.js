import express from 'express';
import books from './books.routes.js';

const routes = (app) => {
  app.use(express.json(), books);
};

export default routes;