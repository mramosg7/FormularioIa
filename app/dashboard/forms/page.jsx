
import ListadoForms from "@/app/ui/dashboard/forms/listadoFormularios";
import { auth } from "@/auth";
import BotonOpenIa from "@/app/ui/openia/botonOpenIa";



export default async function Forms({
    searchParams,
  }){
    
    const {user} = await auth()
    const query = searchParams?.query || null;
    return(
        <div className=" w-[100%] px-[60px] py-5 text-white flex flex-col gap-5">
            <header className="flex justify-between items-center  py-5">
                <h1 className="text-[25px] font-bold ">Formularios</h1>
                <BotonOpenIa />
            </header>
            <section> <ListadoForms query={query} email={user.email}/> </section>
        </div>
    )
}