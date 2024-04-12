'use client'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'
import { MdEdit, MdDeleteForever, MdQueryStats, MdShare  } from "react-icons/md";


export function BotonEditar({id}){
    return(
        <>
            <Link id={'a'+id.slice('-')[0]}  href={`/dashboard/forms/edit/${id}`} className="transition duration-300 flex-grow flex justify-center p-2  hover:bg-[#b5b5b5]"  ><MdEdit/></Link>
            <Tooltip anchorSelect={`#a${id.slice('-')[0]}`}>
                Editar formulario
            </Tooltip>
        </>
    )
}
export function BotonStats({id}){
    return(
        <>
            <Link id={'a'+id}  href={`/dashboard/forms/stats/${id}`} className="transition duration-300 flex-grow flex justify-center p-2  hover:bg-[#b5b5b5]"  ><MdQueryStats/></Link>
            <Tooltip anchorSelect={`#a${id}`}>
                Ver estadisticas
            </Tooltip>
        </>
    )
}

export function BotonCopiar({id}){
    return(
        <>
            <Link id={'a'+id.slice('-')[0]}  href={`/dashboard/forms/stats/${id}`} className="transition duration-300 flex-grow flex justify-center p-2  hover:bg-[#b5b5b5]"  ><MdQueryStats/></Link>
            <Tooltip anchorSelect={`#a${id.slice('-')[0]}`}>
                Ver estadisticas
            </Tooltip>
        </>
    )
}