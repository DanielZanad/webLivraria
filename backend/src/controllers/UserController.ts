import User from '../models/User';
import knex from '../database/database';


interface Result {
    status: boolean;
    message: string | object;
    user?: Array<object> | object
}

class UserController {

    // Buscar um usuario por ID

    async searchUserById(id: number): Promise<Result>{
        try {
            let query = await knex('users').where('id', id);            
            if(query != []){
                return {status: true, message: "Usuario encontrado com sucesso", user: query}
            }else{
                return {status: false, message: "Usuario não encontrado", user: query}
            }
        } catch (error) {
            console.log(error);
            return {status: false, message: "Aconteceu algum erro ao tentar encontrar usuario (Talvez id invalido?)"}
        }
        
    }


    // Inserir um novo usuario
    async create(user: User): Promise<Result> {

        try {
            let query = await knex.insert({
                id: user.getId,
                name: user.getName,
                email: user.getEmail,
                phone: user.getPhone,
                birth: user.getBirth,
                password: user.getPassword
            }).into('users');
            if (query[0] == 0) {
                return { status: true, message: "Usuario inserido com sucesso" };
            } else {
                return { status: true, message: "Algum erro aconteceu ao tentar inserir um novo usuario(talvez ja exista um usuario com o mesmo id no banco?)"};
            }

        } catch (error) {
            console.log(error);
            return { status: false, message: "Algum erro aconteceu ao inserir usuario" }
        }

    }

    // Deleta um usuario por ID
    async delete(id: number): Promise<Result> {
        try {
            let query = await knex('users')
                .where('id', id)
                .del();
            if (query == 1) {
                return { status: true, message: "Usuario deletado com sucesso" };
            } else {
                return { status: false, message: "Algum erro aconteceu ao tentar deletar um usuario" }
            }
        } catch (error) {
            console.log(error);
            return { status: false, message: "Algum erro aconteceu ao tentar deletar um usuario" }
        }
    }



}

export default UserController;


