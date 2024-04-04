export const authConfig = {
    pages: {
        signIn:"/login",
        register:"/register",
        logout:"/"
    },
    callbacks: {
        authorized({auth, request: {nextUrl}}){
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
            if(isOnDashboard){
                if (isLoggedIn) return true
                return false;
            }else if(isLoggedIn){
                console.log(nextUrl)
                return Response.redirect(new URL("/dashboard", nextUrl))
            }
            return true;

        },
    },
    providers:[],
}