export default{
    SEND_REGISTER_RESPONSE: (state, payload)=>{
        state.response.push(payload);
    },
    SEND_AUTHENTICATE_RESPONSE: (state, payload)=>{
        state.response.push(payload)
    }
}