

import { getFormulario } from "@/app/lib/forms/forms"
import BotonConfirmarEdicion from "@/app/ui/forms/botonConfirmarEdicion"

export default async function Edit({params}){
   const formulario = await getFormulario(params.id)
   
    return(
        <div className="mt-5">
           {formulario && (
            <div className="flex flex-col gap-[20px] items-center justify-center">
                <div className="bg-secondary-100 text-white p-2 rounded text-center">
                    <h1>{formulario.name}</h1>
                    <h3>{formulario.description}</h3>
                </div>
                
                {formulario.preguntasformulario.map(pregunta => (
                    <div className='rounded' key={pregunta.id}>
                        <h1 className="bg-secondary-200 p-2 text-[17px] rounded-t-lg">{pregunta.texto}</h1>
                        {pregunta.tipo.descripcion === 'Textarea'&& <textarea className="border border-red-500"></textarea>}
                        {pregunta.tipo.descripcion === 'RadioGroup'&& (
                            pregunta.opcionespregunta.map(opciones => (
                                <div key={opciones.id}>
                                    <input type="radio" name={pregunta.id} value={opciones.text} />
                                    <label>{opciones.text}</label>
                                </div>
                            ))
                        )}
                        {pregunta.tipo.descripcion === 'Select'&& (
                            <select>
                                {pregunta.opcionespregunta.map(opciones => (
                                    <option key={opciones.id} value={opciones.text}>{opciones.text}</option>
                                ))}
                            </select>
                        )}
                        {pregunta.opcionespregunta.map(opciones => {
                            
                            <div key={opciones.id}>
                                <h3>{opciones.text}</h3>
                            </div>
                        })}
                       
                    </div>
                    
                ))}
               <BotonConfirmarEdicion/>
            </div>
           )}
           
        </div>
    )
}