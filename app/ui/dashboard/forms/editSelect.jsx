'use client'
import { useState } from "react"

export default function EditSelect({pregunta, id, addChange, changeOption}){
    const [text, setText] = useState(pregunta.texto)
    return(
        <>
            <input type="text"  className="bg-secondary-200 p-2 text-[17px] rounded-t-lg" value={text} onChange={(e)=>{setText(e.target.value)}} onBlur={()=>{addChange(text,id)}}/>
            <ol className="list-decimal">
            {pregunta.opcionespregunta.map(opciones => (
                <li><input key={opciones.id} type="text" defaultValue={opciones.text}  onBlur={(e)=>{changeOption(e.target.value,opciones.id)}}/></li>
            ))}
               </ol>
        </>
    )
}