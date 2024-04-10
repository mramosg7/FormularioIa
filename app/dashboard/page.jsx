
import Buscador from "../ui/dashboard/home/buscador"
import { Suspense } from "react"
import FormulariosRecientes from "../ui/dashboard/home/formulariosRecientes"
import FormulariosPopulares from "../ui/dashboard/home/formulariosPopulares"
import { auth } from "@/auth";

export default async function Dashboard() {
   const {user} = await auth();
 
    return (
        <div className="w-[100%]">
            <div className="py-5 px-[60px] flex justify-between items-center border-b-4">
                <h1 className="text-[25px] font-bold ">Dashboard</h1>
                
                <Buscador />

            </div>
            <section id="formularios-recientes">
                <h1>Formularios recientes</h1>
                <Suspense fallback={<h1>Cargando...</h1>}>
                    <FormulariosRecientes email={user?.email}/>
                </Suspense>
            </section>
            <section>
                <h1>Formularios populares</h1>
                <Suspense fallback={<h1>Cargando...</h1>}>
                    <FormulariosPopulares/>
                </Suspense>
            </section>
        </div>
    )
}