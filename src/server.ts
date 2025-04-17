import dotenv from 'dotenv';
import express, { Express } from 'express';
import { authenticationRouter, usersRouter } from './routes';
import passport from 'passport';
import { middlewarePassportStrategy } from './middlewares';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Apply strategy to passport
passport.initialize();
middlewarePassportStrategy(passport);

// Define static public assets
app.use(express.static('public'));

app.use(cors());

app.use('/api/v1/authentication', authenticationRouter);
app.use('/api/v1/users', usersRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on PORT: ${port}`);
});

export { app };
