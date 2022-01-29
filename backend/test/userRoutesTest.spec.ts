import supertest from "supertest";
import app from "../src/app";
import UserController from '../src/controllers/UserController';

let userController = new UserController();


const request = supertest(app);
import User from '../src/models/User';


describe("Verficacao de funcionamento de rotas de usuarios", ()=>{
    it("Deve verificar de 'users' esta retornando 200", ()=>{
        // Prepare && Act
        return request.get('/users').then(res =>{
            // Assert
            expect(res.statusCode).toEqual(200);
        });
    });



    it("Deve verificar rota de cadastro de usuarios", ()=>{
        // Prepare 
        let user = new User(666,"Teste","teste@teste.com","4402-8922","2001-03-02","32fdsa2");
        // Act
        return request.post('/users').send(user).then(res =>{

            // Assert
            expect(res.body.status).toEqual(true);
        });
    });

    it("Deve verificar a rota de retorno de usuario por id", ()=>{
        // Prepare && Act
        return request.get('/users/1').then(res =>{
            // Assert
            expect(res.statusCode).toEqual(200);
        });
    });


    it("Deve verificar a rota de delecao de usuario",()=>{
        // Prepare && Act
        return request.delete('/users/666').then(res =>{
            // Assert
            expect(res.statusCode).toEqual(200);
        })
    })



});
