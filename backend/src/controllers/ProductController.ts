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

}




export default ProductController;
