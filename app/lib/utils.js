import bcrypt from 'bcrypt';

export async function encriptarContrasena(contrasena){
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(contrasena, salt);
        return hash;
    }catch(e){
        throw e;
    }
}