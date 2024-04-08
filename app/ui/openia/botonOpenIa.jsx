'use client'
import { useSession } from "next-auth/react"
import { useState } from "react"
import InputOpenia from "./inputOpenia"

export default function BotonOpenIa(){
    const [view, setView] = useState(false)
    const {data} = useSession()
    return(
        <div>
            <button className="bg-primary-100 p-2 text-white" onClick={()=>{setView(true)}}>Crear un nuevo formulario</button>
            {view && <InputOpenia setView={setView} />}
        </div>
    )

}