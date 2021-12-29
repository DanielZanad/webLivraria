import supertest from "supertest";
import app from "../src/app";
import ProductController from '../src/controllers/UserController';

let productController = new ProductController();


const request = supertest(app);
import Product from '../src/models/Product';


describe("Verificando rotas de produtos",()=>{
    it("Deve verificar de 'products' esta retornando 200", ()=>{
        // Prepare && Act
        return request.get('/products').then(res =>{
            // Assert
            expect(res.statusCode).toEqual(200);
        });
    });

    it("Deve verificar a rota que vai retornar um produto por id", ()=>{
        // Prepare && Act
        return request.get('/products/1').then(res =>{
            // Assert 
            expect(res.statusCode).toEqual(200);
        })
    })

    it("Deve verificar a rota de retorno de produto por categoria ", ()=>{
        // Prepare && Act
        return request.get('/products/category/1').then(res =>{
            // Assert
            expect(res.statusCode).toEqual(200);
        })
    })


})
   