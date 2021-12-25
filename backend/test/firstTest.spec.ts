import supertest from "supertest";
import app from "../src/app";
const request = supertest(app);


describe("Verficacao de funcionamento de rotas", ()=>{
    it("Deve verificar de 'users' esta retornando 200", ()=>{
        return request.get('/users').then(res =>{
            expect(res.statusCode).toEqual(200);
        })
    })

    it("Deve verificar de 'products' esta retornando 200", ()=>{
        return request.get('/products').then(res =>{
            expect(res.statusCode).toEqual(200);
        })
    })
})
