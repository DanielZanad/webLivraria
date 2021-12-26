import supertest from "supertest";
import app from "../src/app";
import UserController from '../src/controllers/UserController';

let userController = new UserController();


const request = supertest(app);
import User from '../src/models/User';


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


    it("Deve verificar rota de cadastro de usuarios", ()=>{
        
        let user = new User(1,"Teste","teste@teste.com","4402-8922","2001-03-02","32fdsa2");
        return request.post('/users').send(user).then(res =>{
            expect(res.body.status).toEqual(true);
            userController.delete(1);

        })
    })




})
