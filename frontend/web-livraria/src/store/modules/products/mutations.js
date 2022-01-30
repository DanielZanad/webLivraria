export default{
    REQUEST_ALL_PRODUCTS: (state, payload)=>{
        state.products.push(payload.result);
    }
}