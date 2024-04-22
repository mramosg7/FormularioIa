'use client'
import { useState } from "react"

export default function Pregunta({form}){
    console.log(form)
    const [idPregunta, setIdPregunta] = useState(0)
    const buscarTextoOpcion = (pregunta, id) =>{
        const opcion = pregunta.opcionespregunta.find(opcion => opcion.id === id)
        return opcion.text
    }
    return(
        <>
            <select name="preguntas" id="preguntas" onChange={(e)=>{setIdPregunta(e.target.value)}}>
                {form.preguntasformulario.map((pregunta, index) => (
                    <option value={index }>{pregunta.texto}</option>
                ))}
            </select>
            
            <div>
                {form.preguntasformulario[idPregunta].respuestasusuario.map(respuesta => (
                    <div>
                        {respuesta.respuesta && <p>{respuesta.respuesta}</p>}
                        {respuesta.opcionId &&<p>{buscarTextoOpcion(form.preguntasformulario[idPregunta], respuesta.opcionId)}</p>}
                    </div>
                ))}
            </div>
        </>
    )
}