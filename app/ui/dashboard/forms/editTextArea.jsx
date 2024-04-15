'use client'
import { useState } from "react"
export default function EditTextArea({pregunta, id, addChange}){
    console.log(pregunta)
    const [text, setText] = useState(pregunta)
    
    return(
        <>
            <input type="text"  className="bg-secondary-200 p-2 text-[17px] rounded-t-lg" value={text} onChange={(e)=>{setText(e.target.value)}} onBlur={()=>{addChange(text,id)}}/>
            <textarea className="border border-red-500"></textarea>
        </>
    )
}