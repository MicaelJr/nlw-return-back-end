import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

//"cors" liberar endereços de front para acesso ao backend
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running');
});