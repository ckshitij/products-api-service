import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { productRouter } from './routes/products.routes';


export const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

app.use('/api/v1/', productRouter);
