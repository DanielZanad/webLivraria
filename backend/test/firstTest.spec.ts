import supertest from "supertest";
import app from "../src/app";
const request = supertest(app);

test("Deve verificar se a rota principal esta retornando 200", ()=>{
    return request.get('/').then(res =>{
        expect(res.statusCode).toEqual(200);
    })
})