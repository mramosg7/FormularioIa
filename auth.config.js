


export const authConfig = {
    pages: {
      signIn: '/login',
    },
    callbacks: {
      authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = !!auth?.user;
        const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
        if (isOnDashboard) {
          if (isLoggedIn) {
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
    trustHost: process.env.TRUSTED_HOST || false
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

    // if (isOnEditPage){
            //   const id = nextUrl.pathname.split('/')[4]
            //   // return verifyUser(auth.user.email,id)
            // }
}