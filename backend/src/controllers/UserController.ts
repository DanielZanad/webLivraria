import User from '../models/User';
import knex from '../database/database';
import bcrypt from 'bcrypt';

interface Result {
    status: boolean;
    message: string | object;
    user?: Array<object> | object;
}


class UserController {

    // Buscar um usuario por Email

    async searchUserByEmail(email: string): Promise<Result> {
        try {
            let query = await knex('users').where('email', email);
            if (query.length != 0) {
                return { status: true, message: "Usuario encontrado com sucesso", user: query[0] }
            } else {
                return { status: false, message: "Usuario não encontrado", user: ["Email ainda não existe no banco"] }
            }
        } catch (error) {
            console.log(error);
            return { status: false, message: "Aconteceu algum erro ao tentar encontrar usuario (Talvez email invalido?)" + error, user: [] }
        }

    }

    // Inserir um novo usuario
    async create(user: User): Promise<Result> {
        let checkedEmail = this.searchUserByEmail(user.getEmail);
        if (!(await checkedEmail).status && (await checkedEmail).user != []) {
            try {
                let salt = await bcrypt.genSaltSync(10);
                let hash = await bcrypt.hashSync(user.getPassword, salt);
                console.log(user.getId);
                let query = await knex.insert({
                    id: user.getId,
                    name: user.getName,
                    email: user.getEmail,
                    phone: user.getPhone,
                    gender: user.getGender,
                    birth: user.getBirth,
                    password: hash
                }).into('users');
                if (query[0] == 0) {
                    return { status: true, message: "Usuario inserido com sucesso" };
                } else {
                    return { status: true, message: "Algum erro aconteceu ao tentar inserir um novo usuario(talvez ja exista um usuario com o mesmo id no banco?)" };
                }

            } catch (error) {
                console.log(error);
                return { status: false, message: "Algum erro aconteceu ao inserir usuario" }
            }
        } else {
            return { status: false, message: "Usuario ja existe no banco de dados" }
        }



    }


    // Autentica um novo usuario no banco
    async userLogin(password: string, email: string): Promise<Result> {
        let query = await knex('users').where('email', email);
        if (query.length != 0) {
            let userPassword = query[0].password;
            let correct = await bcrypt.compareSync(password, userPassword);

            if (correct) {
                return { status: true, message: "Senha e email estão corretos" }
            } else {
                return { status: false, message: "Senha incorreta" }
            }
        } else {
            return { status: false, message: "Email ou senha invalidos" }
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


