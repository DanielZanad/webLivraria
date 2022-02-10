import axios from 'axios';
const resourceUri = "http://localhost:3333/users";

export default {
    registerNewUser(context, payload){
        axios.post(resourceUri, payload).then(res =>{
            context.commit('SEND_REGISTER_RESPONSE', res.data);
        }).catch(error=>{
            context.commit('SEND_REGISTER_RESPONSE', error.response.data);
        });

    },

    authenticateUser(context, payload){
        axios.post(resourceUri, payload).then(res =>{
            context.commit('SEND_AUTHENTICATE_RESPONSE', res.data);
        }).catch(error=>{
            context.commit('SEND_AUTHENTICATE_RESPONSE', error.response.data)
        })
    }


}