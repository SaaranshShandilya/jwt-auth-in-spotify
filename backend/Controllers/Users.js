import {UserModel} from '../Schemas/Users.js';
import {createSecretToken, verifySecretToken} from '../Controllers/Jwt.js'
import bcrypt from 'bcrypt'

export const createUser =async (req, res) =>{
    const {email, password, name, dateOfBirth, gender} = req.body

    const extinguishUser = await UserModel.findOne({email})
    if(extinguishUser!=null){
       return res.json({"status":"User already exists"})
    }

    UserModel.create({
        name:name,
        email:email,
        password:password,
        dateOfBirth:dateOfBirth,
        gender:gender
    })
    .then((response) =>{
        console.log(response)
        res.cookie("token",createSecretToken(response._id),{
            withCredentials: true,
            httpOnly: false,
        })
        res.status(201).json({"status":"Success, user created successfully",
        // "uuid": response._id
    })
    })
    .catch((err) =>{
        console.error(err)
    })

}

export const Login = async (req, res) => {
    const {email, password} = req.body;
    const user = await UserModel.findOne({email})
    if(!user){
        return res.status(404).json({"message":"User does not exist"})
    }
    const auth  = await bcrypt.compare(password, user.password)
    if (!auth) {
        return res.json({message:'Incorrect password or email' }) 
    }
    const token = createSecretToken(user._id)
    res.cookie("token", token,{
        withCredentials: true,
        httpOnly: false,
    })
    res.status(201).json({ message: "User logged in successfully", success: true ,});

}

export const verifyToken =  async(req, res)=>{
    console.log(req.cookies.token)
    const token = req.cookies.token
    if(!token){
        return res.json({status:false})
    }
    verifySecretToken(token)
    .then((response)=>{
        console.log(response)
        res.json({"uuid":response.id})
    })
    .catch((error)=>{
        console.log(error)
    })
   
}

