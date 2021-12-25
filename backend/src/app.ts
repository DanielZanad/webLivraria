import express from 'express';
import routerUsers from './routes/users';
import routerProducts from './routes/products';
const app = express();


app.use('/users', routerUsers);
app.use('/products', routerProducts);



export default app;
