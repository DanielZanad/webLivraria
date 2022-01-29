import express from 'express';
import ProductController from '../controllers/ProductController';
import Product from '../models/Product';
const router = express.Router();
const productController = new ProductController();

router.get('/', async (req, res) => {
    let result = await productController.searchAllProducts();
    if (result.status) {
        res.status(200).send({
            status: result.status,
            message: result.message,
            result: result.product
        });
    } else {
        res.status(400).send({
            status: result.status,
            message: result.message,
            result: result.product
        });
    }

});

router.get('/:id', async (req, res) => {
    let id = Number(req.params.id);
    let result = await productController.searchProductById(id);
    if (result.status) {
        res.status(200).send({
            status: result.status,
            message: result.message,
            result: result.product
        });
    } else {
        res.status(400).send({
            status: result.status,
            message: result.message,
            result: result.product
        });
    }
});

router.get('/category/:id', async (req, res) => {
    let cod_categ = Number(req.params.id);
    let result = await productController.searchProductByCategory(cod_categ);
    if (result.status) {
        res.status(200).send({
            status: result.status,
            message: result.message,
            result: result.product
        });
    } else {
        res.status(400).send({
            status: result.status,
            message: result.message,
            result: result.product
        });
    }
});

router.delete('/:id',async (req, res)=>{
    let id = Number(req.params.id);

    if(isNaN(id)){
        res.status(400).send({
            status: false,
            message: "É necessario passar um um ID na rota para deleção"
        });
    }

    let result = await productController.deleteProductById(id);
    if(result.status){
        res.status(200).send({
            status: result.status,
            message: result.message
        });
    }else{
        res.status(400).send({
            status: result.status,
            message: result.message
        });
    }
});

router.post('/', async (req, res)=>{
    const {id, name, price, img, cod_categ, description} = req.body
    let product  = new Product(id, name, price, img, cod_categ, description);
    let result = await productController.create(product);
    if(result.status){
        res.status(200).send({
            status: result.status,
            message: result.message
        });
    }else{
        res.status(400).send({
            status: result.status,
            message: result.message
        })
    }

})



export default router;