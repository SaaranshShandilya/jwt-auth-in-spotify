import jwt from 'jsonwebtoken'

export const createSecretToken = (id)=>{
    return jwt.sign({id}, "spotifyclone", {expiresIn:3*24*60*60})
}

export const verifySecretToken = async (token)=>{
    return jwt.verify(token, "spotifyclone")
}