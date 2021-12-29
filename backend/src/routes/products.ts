import express from 'express';
import ProductController from '../controllers/ProductController';
const router = express.Router();
const productController = new ProductController();

router.get('/', (req, res)=>{
    res.json({message: "Tudo ok/ Produtos"});
})

router.get('/:id', async (req, res)=>{
    let id = Number(req.params.id);
    let result = await productController.searchProductById(id);
    if(result.status){
        res.status(200).send({
            status: result.status,
            message: result.message,
            result: result.product
        });
    }else{
        res.status(400).send({
            status: result.status,
            message: result.message,
            result: result.product
        });
    }
})


export default router