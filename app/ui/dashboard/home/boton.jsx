'use client'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'

export function Boton ({children, text, id, formId}){
    
    return(
        <>
            <Link href={`/dashboard/forms/${id}/${formId}`} className="transition duration-300 flex-grow flex justify-center p-2  hover:bg-[#b5b5b5]"  id={id} >{children}</Link>
            <Tooltip anchorSelect={`#${id}`}>
                {text}
            </Tooltip>
        </>
    )
}


export function BotonCopiar({children,id, text}){
return(
    <>
        <button className="transition duration-300 flex-grow flex justify-center p-2  hover:bg-[#b5b5b5]"  id={id} >{children}</button>
        <Tooltip anchorSelect={`#${id}`}>
            {text}
        </Tooltip>
    </>
)}