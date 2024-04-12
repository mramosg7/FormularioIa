
import ListadoForms from "@/app/ui/dashboard/forms/listadoFormularios";
import { auth } from "@/auth";
import BotonOpenIa from "@/app/ui/openia/botonOpenIa";



export default async function Forms(){
    
   const {user} = await auth()
 
    return(
        <div className=" w-[100%] px-[60px]">
            <header className="flex justify-between items-center border-b-4 py-5">
                <h1 className="text-[25px] font-bold ">Formularios</h1>
                <h2>hola</h2>
            </header>
            <section className="py-5"><BotonOpenIa /></section>
            <section> <ListadoForms email={user.email}/> </section>
        </div>
    )
}