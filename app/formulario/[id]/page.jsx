'use client'

import { getFormulario } from "@/app/lib/forms/forms";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from 'react-dom';
import { exportarRespuesta } from "@/app/lib/actions";

export default function FormularioUsuario({params}){
    const {id} = params;
    const [formulario, setFormulario] = useState(null);
    const [error, dispacher] = useFormState(exportarRespuesta, undefined);
    
    useEffect(() => {
        getFormulario(id).then((data) => {
            setFormulario(data);
        });
    }, [id]);

    return(
        <>
            {formulario && (<div className="flex flex-col items-center justify-center">
                <h1>{formulario.name}</h1>
                <p>{formulario.description}</p>
                <form action={dispacher}>
                    {formulario.preguntasformulario.map(pregunta => (
                        <div key={pregunta.id}>
                            <h1>{pregunta.texto}</h1>
                            {pregunta.tipo.descripcion === 'Textarea'&& <textarea name={`textarea-${pregunta.id}`}></textarea>}
                            {pregunta.tipo.descripcion === 'RadioGroup'&& (
                                pregunta.opcionespregunta.map(opciones => (
                                    <div key={opciones.id}>
                                        <input type="radio" name={pregunta.id} value={opciones.text} />
                                        <label>{opciones.text}</label>
                                    </div>
                                ))
                            )}
                            {pregunta.tipo.descripcion === 'Select'&& (
                                <select name={pregunta.id}>
                                    {pregunta.opcionespregunta.map(opciones => (
                                        <option key={opciones.id} name={opciones.id} value={opciones.text}>{opciones.text}</option>
                                    ))}
                                </select>
                            )}
                        </div>
                    ))}
                    <SubmitButton/>
                </form>
            </div>)}
        </> 

    )   
}


function SubmitButton() {
    const { pending } = useFormStatus();
   
    return (
      <button className="bg-primary-100 rounded mt-2 text-white p-1" aria-disabled={pending}>
        {pending ? 'Enviando...' : 'Enviar'}
      </button>
    );
  }