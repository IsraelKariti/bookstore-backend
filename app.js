import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { router as usersRouter} from './src/routers/users.router.js';
import {router as booksRouter} from './src/routers/books.router.js';
import {router as loginRouter} from './src/routers/login.router.js';
import {router as signupRouter} from './src/routers/signup.router.js';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);

app.all('*', (_,res)=>{ 
    res.send('not found 404');
});
