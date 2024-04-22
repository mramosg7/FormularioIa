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
        <div className="m-5 ">
            {formulario && (<div className="flex flex-col items-center justify-center">
                <div className="bg-primary-100 p-2 w-[50%] text-white text-center rounded-t-xl">
                    <h1 className="font-bold text-[20px]">{formulario.name}</h1>
                    <p>{formulario.description}</p>
                </div>
                <form className='p-5 flex flex-col items-center gap-5 w-[50%] bg-secondary-100 rounded-b-xl' action={dispacher}>
                    {formulario.preguntasformulario.map(pregunta => (
                        <div className=" bg-white p-2 flex flex-col gap-1 w-[75%] border-l-4 border-primary-100 rounded" key={pregunta.id}>
                            <h1 className="font-semibold text-[17px] mb-2">{pregunta.texto}</h1>
                            {pregunta.tipo.descripcion === 'Textarea'&& <textarea style={{resize:'none'}} className="border rounded border-primary-100 focus:outline-none focus:border-[2.5px]" rows={5} name={`textarea-${pregunta.id}`}></textarea>}
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
                    <div className="">
                        <SubmitButton/>
                    </div>
                    
                </form>
            </div>)}
        </div> 

    )   
}


function SubmitButton() {
    const { pending } = useFormStatus();
   
    return (
      <button className="bg-primary-100 rounded mt-2 text-white py-2 px-5" aria-disabled={pending}>
        {pending ? 'Enviando...' : 'Enviar'}
      </button>
    );
  }