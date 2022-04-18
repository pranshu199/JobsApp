import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes';
import {BadRequestError, NotFoundError} from '../errors/index.js'

const register = async (req, res, next)=>{

        const {name, email, password} = req.body;
        if(!name ){
            throw new BadRequestError('Name is required')
        }
        if(!email){
            throw new BadRequestError('Email is required')
        }
        if(!password){
            throw new BadRequestError('Password is required')
        }
        const user = await User.create(req.body)
        user.createJWT()
        res.status(StatusCodes.CREATED).json({user})

    
    
}
const login = async (req, res)=>{

    res.send('login user');
}
const updateUser = async (req, res)=>{

    res.send('update user');
}


export {register, login, updateUser}