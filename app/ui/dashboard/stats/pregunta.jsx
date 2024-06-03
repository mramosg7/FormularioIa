'use client'
import { useState } from "react"

export default function Pregunta({form}){
   
    const [idPregunta, setIdPregunta] = useState(0)
    const buscarTextoOpcion = (pregunta, id) =>{
        
        const opcion = pregunta.opcionespregunta.find(opcion => opcion.id === id)
        return opcion.text
    }
    return(
        <div className="flex flex-col items-center">
            <div className=" p-3 rounded flex flex-col gap-5">
                <div className="text-black" >
                    <select name="preguntas" id="preguntas" onChange={(e)=>{setIdPregunta(e.target.value)}}>
                        {form.preguntasformulario.map((pregunta, index) => (
                            <option value={index} key={pregunta.id}>{pregunta.texto}</option>
                        ))}
                    </select>
                </div>
            
                
                <div className="flex flex-col gap-2 ">
                    {form.preguntasformulario[idPregunta].respuestasusuario.map(respuesta => (
                        <div className='bg-secondary-300 p-2' key={respuesta.id}>
                            {respuesta.respuesta && <p>{respuesta.respuesta}</p>}
                            {respuesta.opcionId &&<p>{buscarTextoOpcion(form.preguntasformulario[idPregunta], respuesta.opcionId)}</p>}
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}