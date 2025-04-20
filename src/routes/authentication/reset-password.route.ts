// Libraries
import bodyParser from 'body-parser';
import express from 'express';

// Controller
import { resetPasswordController } from 'src/controllers/authentication';

const resetPasswordRouter = express.Router();

resetPasswordRouter
  .use(bodyParser.json())
  .post('/', resetPasswordController.resetPassword);

export { resetPasswordRouter };
