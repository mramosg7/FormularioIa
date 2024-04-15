'use client'
import { useState } from "react"
export default function EditRadioGroup({pregunta, id, addChange, changeOption}){
    const [text, setText] = useState(pregunta.texto)
    return(
        <>
            <input type="text"  className="bg-secondary-200 p-2 text-[17px] rounded-t-lg" value={text} onChange={(e)=>{setText(e.target.value)}} onBlur={()=>{addChange(text,id)}}/>
            {pregunta.opcionespregunta.map(opciones => (
                <div key={opciones.id}>
                    <input type="radio" name={pregunta.id} value={opciones.text} />
                    <label><input type="text" defaultValue={opciones.text}  onBlur={(e)=>{changeOption(e.target.value,opciones.id)}}/></label>
                </div>
            ))}
        </>
    )
}