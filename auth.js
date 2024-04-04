import NextAuth from "next-auth";
import {authConfig} from "./auth.config.js";
import {PrismaClient} from "@prisma/client";
import Credentials from "next-auth/providers/credentials";

const primsa = new PrismaClient()


async function getUser(email, nickname){
    try{
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
                const user = await getUser(credentials.data.email, credentials.data.nickname);
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