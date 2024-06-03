import bcrypt from 'bcryptjs';
import generatePassword from 'generate-password';

export async function encriptarContrasena(contrasena){
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(contrasena, salt);
        return hash;
    }catch(e){
        throw e;
    }
}


export async function passwordGenerate(){
    const password = await generatePassword.generate({
        length: 100,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        excludeSimilarCharacters: true
      });
    const contsena =  await encriptarContrasena(password);
    return contsena;

}

