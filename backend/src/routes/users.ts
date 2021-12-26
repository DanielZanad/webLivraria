import express from 'express';
import User from '../models/User';
import UserController from '../controllers/UserController';

let userController = new UserController();
const router = express.Router();




router.get('/', (req, res)=>{
    res.json({message: "Tudo ok"});
});


router.post('/', async (req, res)=>{
    const {id, name, email, phone, birth, password } = req.body;
    let user = new User(id,name,email,phone,birth,password);
    let result  = await userController.create(user);
    if(result.status){
        res.json({status: true})
    }else{
        res.json({status: false})
    }
    
});  


router.delete('/',async (req, res)=>{
    let result = await userController.delete(req.body.id);
    if(result.status){
        res.json({status: true})
    }else{
        res.json({status: false})
    }
});

export default router
