import axios from 'axios';
const resourceUri = "http://localhost:3333/products";

export default {
    async requestAllProducts(context){
        let response = await axios.get(resourceUri);
        console.log(response.data)
        let payload = response.data;
        context.commit('REQUEST_ALL_PRODUCTS', payload)
    }
}