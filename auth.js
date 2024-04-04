import NextAuth from "next-auth";
import {authConfig} from "./auth.config.js";
import {PrismaClient} from "@prisma/client";
import Credentials from "next-auth/providers/credentials";




async function getUser(email, nickname){
    try{
        const prisma = new PrismaClient()
        const user = await prisma.user.findFirst({
            where:{
                or:[
                    {email},
                    {nickname}
                ]
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
                const user = await getUser(credentials.email, credentials.nickname);
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