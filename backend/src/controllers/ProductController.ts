import Product from '../models/Product';
import knex from '../database/database';


interface Result {
    status: boolean;
    message: string | object;
    product?: Array<object> | object
}

class ProductController{

    // Retorna todos os produtos 
    async searchAllProducts(): Promise <Result>{
        try {
            let query = await knex.select().from('products').timeout(1000);
            if(query != []){
                return {status: true, message: "Produtos encontrado com sucesso", product: query}
            }else{
                return {status: false, message: "Nenhum produto não encontrado", product: query}
            }
        }catch(error){
            console.log(error);
            return {status: false, message: "Aconteceu algum erro ao tentar encotrar os produtos"}
        }
    }

    // Inserir um novo produto
    async create(product: Product): Promise<Result> {

        try {
            let query = await knex.insert({
                id: product.getId,
                name: product.getName,
                price: product.getPrice,
                img: product.getImg,
                cod_categ: product.getCod_categ,
                description: product.getDescription
            }).into('products');
            if (query[0] == 0) {
                return { status: true, message: "Produto inserido com sucesso" };
            } else {
                return { status: true, message: "Algum erro aconteceu ao tentar inserir um novo produto(talvez ja exista um usuario com o mesmo id no banco?)"};
            }

        } catch (error) {
            console.log(error);
            return { status: false, message: "Algum erro aconteceu ao inserir um produto" }
        }

    }


    // Retornar produto por id
    async searchProductById(id: number): Promise <Result>{
        try{
            let query = await knex('products').where('id', id);
            if(query != []){
                return {status: true, message: "Produto encontrado com sucesso", product: query}
            }else{
                return {status: false, message: "Produto não encontrado", product: query}
            }
        }catch(error){
            console.log(error);
            return {status: false, message: "Aconteceu algum erro ao tentar encotrar o produto(Talvez id invalido?)"}
        }
    }


    // Retornar produto por categoria
    async searchProductByCategory(cod_categ: number): Promise <Result>{
        try{
            let query = await knex('products').where('cod_categ', cod_categ);
            if(query != []){
                return {status: true, message: "Produto(s) encontrado(s) com sucesso", product: query}
            }else{
                return {status: false, message: "Produto(s) não encontrado(s)", product: query}
            }
        }catch(error){
            console.log(error);
            return {status: false, message: "Aconteceu algum erro ao tentar encotrar o produto(Talvez id invalido?)"}
        }
    }


    // Deleta um usuario por ID
    async deleteProductById(id: number): Promise<Result> {
        try {
            let query = await knex('products')
                .where('id', id)
                .del();
            if (query == 1) {
                return { status: true, message: "Produto deletado com sucesso" };
            } else {
                return { status: false, message: "Algum erro aconteceu ao tentar deletar um produto" }
            }
        } catch (error) {
            console.log(error);
            return { status: false, message: "Algum erro aconteceu ao tentar deletar um produto" }
        }
    }


}




export default ProductController;
