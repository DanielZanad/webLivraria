import User from '../models/User';
import knex from '../database/database';


interface Result {
    status: boolean;
    message: string | object
}

class UserController {
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
                return { status: true, message: "Algum err aconteceu ao inserir usuario" };
            }

        } catch (error) {
            console.log(error);
            return { status: false, message: "Algum erro aconteceu ao inserir usuario" }
        }

    }


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
            return { status: false, message: "Algum erro aconteceu ao tentar deletar um usuario" }
        }
    }

}

export default UserController;


