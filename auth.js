import NextAuth from "next-auth";
import {authConfig} from "./auth.config.js";
import {PrismaClient} from "@prisma/client";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


async function getUser(email){
    try{
        
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

export const { handlers:{GET,POST}, auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers:[
        Credentials({
            async authorize(credentials){
                console.log("credentials",credentials)
                const user = await getUser(credentials.email);
                      
                if(user){
                    console.log(user)
                    const user2 = {id:user.id, name:user.nick, email:user.email}
                    return user2;
                }else{
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_ID
          })
    ]
});