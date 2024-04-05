'use client'
import InputOpenia from "@/app/ui/inputOpenia";
import { useState } from "react";

export default function Forms(){
    const [view, setView] = useState(false)
    return(
        <div>
            <button className="bg-primary-100 p-2 text-white" onClick={()=>{setView(true)}}>Crear un nuevo formulario</button>
            {view && <InputOpenia setView={setView} />}
        </div>
    )
}