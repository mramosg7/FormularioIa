'use client'
import { useState } from "react"
export default function EditRadioGroup({pregunta, changeOption}){
    
    return(
        <>
            
            {pregunta.opcionespregunta.map(opciones => (
                <div className='flex gap-2' key={opciones.id}>
                    <input type="radio" name={pregunta.id} value={opciones.text} />
                    <label><input type="text"className="focus:outline-none focus:border border-primary-100 rounded " defaultValue={opciones.text}  onBlur={(e)=>{changeOption(e.target.value,opciones.id)}}/></label>
                </div>
            ))}
        </>
    )
}