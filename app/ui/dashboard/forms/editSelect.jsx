'use client'
import { useState } from "react"

export default function EditSelect({pregunta, changeOption}){
    return(
        <>
            <ol className="ml-5 list-decimal">
            {pregunta.opcionespregunta.map(opciones => (
                <li key={opciones.id}><input  type="text" className="focus:outline-none focus:border border-primary-100 rounded " defaultValue={opciones.text}  onBlur={(e)=>{changeOption(e.target.value,opciones.id)}}/></li>
            ))}
            </ol>
        </>
    )
}