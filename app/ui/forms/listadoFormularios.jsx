'use client'

import { getFormularios } from "../../lib/forms/forms";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function ListadoForms({email}){
    console.log(email)
    const [formularios, setFormularios] = useState(null)
    useEffect(() => {
        console.log(email)
        getFormularios(email).then((f) => {
            if(f){
                setFormularios(f)
            }
           
        })
    }, [])
   
    return(
        <>
            {formularios && formularios.map(formulario => (
                <div className="bg-primary-100 p-2 text-white m-2" key={formulario.id}>
                    <h1>{formulario.name}</h1>
                    <p>{formulario.description}</p>
                    <Link href={`/dashboard/forms/edit/${formulario.id}`} className="bg-wite text-black p-2">
                        <div>
                            editar
                        </div>
                    </Link>

                </div>
            ))}
            {!formularios && <h1 className="text-red">No hay formularios</h1>}
        </>
    )
}