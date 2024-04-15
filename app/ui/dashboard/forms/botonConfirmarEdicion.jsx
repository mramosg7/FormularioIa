'use client'

import { updateChanges } from "@/app/lib/forms/forms"
import { redirect } from "next/navigation"
export default function BotonConfirmarEdicion({changes}){
    return(
        <button onClick={()=>{
            updateChanges(changes).then(() => {
                window.location.href = '/dashboard/forms'
            })
           
        }}className="bg-primary-100 p-2 text-white">Confirmar edicion</button>
    )
}