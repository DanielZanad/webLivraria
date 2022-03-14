import supertest from "supertest";
import app from "../src/app";


const request = supertest(app);
import User from '../src/models/User';


describe("Verficacao de funcionamento de rotas de usuarios", () => {
    it("Deve verificar de 'users' esta retornando 200", () => {
        // Prepare && Act
        return request.get('/users').then(res => {
            // Assert
            expect(res.statusCode).toEqual(200);
        });
    });



    it("Deve verificar rota de cadastro de usuarios", () => {
        // Prepare 
        let user = new User(666, "Teste", "testando@testando.com", "4402-8922", "Masculino", "2001-03-02", "32fdsa2");
        // Act
        return request.post('/users').send(user).then(res => {

            // Assert
            expect(res.body.status).toEqual(true);
        });
    });


    it("Deve verificar a rota de login, no caso da senha estar correta", () => {
        // Prepare
        let login = {
            email: "testando@testando.com",
            password: "32fdsa2"
        }
        // Act
        return request.post('/users/login').send(login).then(res => {
            // Act
            expect(res.body.status).toEqual(true);
        })
    })

    
    it("Deve verificar a rota de login, no caso da senha estar errada", () => {
        // Prepare
        let login = {
            email: "testando@testando.com",
            password: "232323232"
        }
        // Act
        return request.post('/users/login').send(login).then(res => {
            // Act
            expect(res.body.status).toEqual(false);
        })
    })


    it("Deve verificar a rota de retorno de usuario por email", () => {
        // Prepare && Act
        return request.get('/users/testando@testando.com').then(res => {
            // Assert
            expect(res.statusCode).toEqual(200);
        });
    });


    it("Deve verificar a rota de delecao de usuario", () => {
        // Prepare && Act
        return request.delete('/users/testando@testando.com').then(res => {
            // Assert
            expect(res.statusCode).toEqual(200);
        })
    })



});
