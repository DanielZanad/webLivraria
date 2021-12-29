import Product from '../models/Product';
import knex from '../database/database';


interface Result {
    status: boolean;
    message: string | object;
    product?: Array<object> | object
}

class ProductController{

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

}




export default ProductController;
