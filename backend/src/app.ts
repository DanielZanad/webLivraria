import express from 'express';
import routerUsers from './routes/users';
import routerProducts from './routes/products';
import cors from 'cors';

const app = express();


app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/users', routerUsers);
app.use('/products', routerProducts);



export default app;
