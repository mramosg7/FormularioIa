'use client'


import ListadoForms from "@/app/ui/dashboard/forms/listadoFormularios";
import { useSession } from "next-auth/react";
import BotonOpenIa from "@/app/ui/openia/botonOpenIa";


export default function Forms(){
    
   const {data} = useSession()
 
    return(
        <div>
            <BotonOpenIa />
            {!!data?.user?.email && <ListadoForms email={data.user.email}/>}
        </div>
    )
}