import NextAuth from "next-auth";
import {authConfig} from "./auth.config.js";
import {PrismaClient} from "@prisma/client";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { passwordGenerate } from "./app/lib/utils.js";


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
    callbacks:{
        ...authConfig.callbacks,
        async signIn({account,user}){
            if(account.provider === 'google'){
                const userbd = await getUser(user.email);
                if (!userbd){
                    const prisma = new PrismaClient();
                    await prisma.usuario.create({
                        data:{
                            email:user.email,
                            nick:user.name,
                            nombre:user.name,
                            password: await passwordGenerate()
                        }
                    });
                }
            }
            return true
        }
    },
    providers:[
        Credentials({
            async authorize(credentials){
                console.log("credentials",credentials)
                const user = await getUser(credentials.email);
                
                if(!user) return null;
                const passwordsMatch = await bcrypt.compare(credentials.password, user.password);
                console.log("passwordsMatch",passwordsMatch)
                if(passwordsMatch){
                    const user2 = {id:user.id, name:user.nick, email:user.email}
                    return user2;
                }

                console.log('Invalid credentials');
                return null;
            },
            
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_ID
          })
    ]
});