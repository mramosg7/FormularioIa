'use client'
import { useSession } from "next-auth/react"
import { useState } from "react"
import InputOpenia from "./inputOpenia"
import { FaPlus } from "react-icons/fa";

export default function BotonOpenIa(){
    const [view, setView] = useState(false)
    const {data} = useSession()
    return(
        <div>
            <button className="bg-primary-100 p-2 text-white rounded flex items-center gap-2 hover:bg-primary-100/70" onClick={()=>{setView(true)}}> <FaPlus/> Crear un nuevo formulario</button>
            {view && <InputOpenia setView={setView} />}
        </div>
    )

}