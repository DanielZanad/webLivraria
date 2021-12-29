import express from 'express';
import ProductController from '../controllers/ProductController';
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

})



export default router;