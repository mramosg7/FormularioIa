'use client'

import { updateChanges } from "@/app/lib/forms/forms"
import { redirect } from "next/navigation"
import html2canvas from "html2canvas"
import { saveImage } from "@/app/lib/forms/forms"
export default function BotonConfirmarEdicion({changes, id}){
    return(
        <button onClick={()=>{
            updateChanges(changes).then(() => {
                html2canvas(document.getElementById('formulario')).then(canvas => {
                    const imageData = canvas.toDataURL(); 
                    saveImage(imageData, id).then(() => {
                        window.location.href = '/dashboard/forms'
                    })
                })
                
            })
           
        }}className="bg-primary-100 p-2 text-white">Confirmar edicion</button>
    )
}