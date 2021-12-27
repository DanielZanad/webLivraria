import express from 'express';
import User from '../models/User';
import UserController from '../controllers/UserController';

let userController = new UserController();
const router = express.Router();




router.get('/', (req, res)=>{
    res.status(200).send({message: "Tudo ok"});
});


router.get('/:id', async (req, res)=>{
    let id = Number(req.params.id);
    let result = await userController.searchUserById(id);
    if (result.status){
        res.status(200).send({
            status: result.status,
            message: result.message,
            result: result.user
        });
    }else{
        res.status(400).send({
            status: result.status,
            message: result.message,
            result: result.user
        });
    }
    
});


router.post('/', async (req, res)=>{
    const {id, name, email, phone, birth, password } = req.body;
    let user = new User(id,name,email,phone,birth,password);
    let result  = await userController.create(user);
    if(result.status){
        res.status(200).send({
            status: result.status,
            message: result.message
        });
    }else{
        res.status(400).send({
            status: result.status,
            message: result.message
        });
    }
    
});  

router.delete('/:id',async (req, res)=>{
    let id = Number(req.params.id);

    if(isNaN(id)){
        res.status(400).send({
            status: false,
            message: "É necessario passar um um ID na rota para deleção"
        });
    }

    let result = await userController.delete(id);
    if(result.status){
        res.status(200).send({
            status: result.status,
            message: result.message
        });
    }else{
        res.status(200).send({
            status: result.status,
            message: result.message
        });
    }
});

export default router
