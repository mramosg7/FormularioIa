import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate'
export const authConfig = {
    pages: {
      signIn: '/login',
    },
    callbacks: {
      authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = !!auth?.user;
        const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
        const isOnEditPage = nextUrl.pathname.startsWith('/dashboard/forms/edit');
        if (isOnDashboard) {
          if (isLoggedIn) {
            if (isOnEditPage){
              const id = nextUrl.pathname.split('/')[4]
              // return verifyUser(auth.user.email,id)
            }
            return true
          };
          return false; 
        } else if (isLoggedIn) {
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
        return true;
      },
    },
    providers: [],
  }


const verifyUser = async (email,id) => {
    const prisma = new PrismaClient().$extends(withAccelerate());
    const user = await prisma.usuario.findFirst({
        where:{
            email:email
        }
    })
    const form = await prisma.formulario.findFirst({
        where:{
            id:id
        }
    })


    
    return form.usuarioId === user.id
}