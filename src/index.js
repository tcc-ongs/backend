import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import env from 'dotenv';
import cookieParser from 'cookie-parser';

import routes from './routes';

env.config();

const app = express();

// Middlewares de segurança (se tiver problema de CORS, comente a segunda linha abaixo)
app.use(helmet());
app.use(cors({ credentials: true, origin: process.env.APPLICATION_URL }));

// Usar cookies
app.use(cookieParser());

// Todas respostas em JSON
app.use(express.json({ limit: '50mb' }));

// Controle de imagens
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(routes);

app.listen(process.env.PORT || 3000);
