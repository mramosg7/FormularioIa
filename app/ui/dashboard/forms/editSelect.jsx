'use client'
import { useState } from "react"

export default function EditSelect({pregunta, changeOption}){
    return(
        <>
            <ol className="ml-5 list-decimal">
            {pregunta.opcionespregunta.map(opciones => (
                <li><input key={opciones.id} type="text" defaultValue={opciones.text}  onBlur={(e)=>{changeOption(e.target.value,opciones.id)}}/></li>
            ))}
            </ol>
        </>
    )
}