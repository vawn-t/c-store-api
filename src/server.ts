import dotenv from 'dotenv';
import express, { Express } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Define static public assets
app.use(express.static('public'));

// // Imports all of the routes
app.use('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on PORT: ${port}`);
});

export { app };
