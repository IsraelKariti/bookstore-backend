import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { router as usersRouter} from './src/routers/users.router.js';
import {router as booksRouter} from './src/routers/books.router.js';
import {router as loginRouter} from './src/routers/login.router.js';
import {router as signupRouter} from './src/routers/signup.router.js';
import {router as authorizationRouter} from './src/routers/authorization.router.js';
import {router as settingsRouter} from './src/routers/settings.router.js';
import { authenticateAdmin } from './src/authenticators/user.authenticator.js';
export const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/verify', authorizationRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/settings', settingsRouter);

app.all('*', (_,res)=>{  
    res.send('not found 404');
});
