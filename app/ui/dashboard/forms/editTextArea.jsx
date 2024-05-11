'use client'
import { useState } from "react"
export default function EditTextArea({pregunta}){
    return(
        <>
            <textarea style={{resize:'none'}} className="border rounded border-primary-100 focus:outline-none focus:border-[2.5px] w-[100%]"rows={5}></textarea>
        </>
    )
}