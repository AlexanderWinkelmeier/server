import express, { type Request, type Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdfasdf'] }));
app.use(router);

app.listen(3000, () => console.log('Server listening on port 3000'));
