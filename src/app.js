import express from 'express';
import routes from './routes/index.js'
import connect from './configurations/db-connect.configuration.js';

const connection = await connect();

connection.on('error', (error) => {
    console.error('error connecting to db:', error);
});

connection.once('open', () => {
    console.log('connected to db');
});

const app = express();
routes(app);

export default app;