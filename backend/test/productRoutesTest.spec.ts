import supertest from "supertest";
import app from "../src/app";
import ProductController from '../src/controllers/UserController';
const productController = new ProductController();

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

    it("Deve verificar a rota de insercao de produtos",()=>{
        // Prepare
        let product  = new Product(666, 'Outer Wilds', 35.90, 'outer_wilds.jpg', 1, 'Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed and award-winning open world mystery about a solar system trapped in an endless time loop.')
        
        // Act
        return request.post('/products').send(product).then(res => {
            // Assert
            expect(res.statusCode).toEqual(200);
        })
    })
    
    it("deve testar a rota de deleção de produto por id", ()=>{
        // Prepare && Act
        return request.delete('/products/666').then(res =>{
            // Assert
            expect(res.statusCode).toEqual(200);
        })
    })


})
   