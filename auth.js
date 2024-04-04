import NextAuth from "next-auth";
import {authConfig} from "./auth.config.js";
import {PrismaClient} from "@prisma/client";
import Credentials from "next-auth/providers/credentials";




async function getUser(email){
    try{
        console.log(email)
        const prisma = new PrismaClient()
        const user = await prisma.usuario.findFirst({
            where:{
                email:email
            }
        });
        return user;
    }catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
      }
}

export const {handlers:{GET,POST}, auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers:[
        Credentials({
            async authorize(credentials){
                console.log(credentials)
                const user = await getUser(credentials.email);
                console.log(user)
                if(user){
                    return user;
                }else{
                    return null;
                }
            }
        })
    ]
});