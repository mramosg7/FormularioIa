'use client'

import {useState, useEffect} from 'react'
import { getFormulario } from "@/app/lib/forms/forms"
import BotonConfirmarEdicion from "@/app/ui/dashboard/forms/botonConfirmarEdicion"
import EditTextArea from "@/app/ui/dashboard/forms/editTextArea"
import EditRadioGroup from '@/app/ui/dashboard/forms/editRadioGroup'
import EditSelect from '@/app/ui/dashboard/forms/editSelect'


export default function Edit({params}){
   const [formulario , setFormulario] = useState(null)
   const [changes, setChanges] = useState({preguntas: {}, opciones:{}})
   console.log(changes)
   
   useEffect(() => {
       getFormulario(params.id).then(data => {
           setFormulario(data)
       })
   },[params.id])
   const addChanges = (text,id) => {
        setChanges(prev => ({...prev, preguntas: {...prev.preguntas, [id]: text}}))
      

   }
   const changeOption= (text,id) => {
         setChanges(prev => ({...prev, opciones: {...prev.opciones, [id]: text}}))
    }
   
    return(
        <div className="mt-5">
           {formulario && (
            <div className="flex flex-col gap-[20px] items-center justify-center">
                <div className="bg-secondary-100 text-black p-2 rounded text-center">
                    <h1>{formulario.name}</h1>
                    <h3>{formulario.description}</h3>
                </div>
                
                {formulario.preguntasformulario.map(pregunta => (
                    <div className='rounded' key={pregunta.id}>
                        {pregunta.tipo.descripcion === 'Textarea'&& <EditTextArea pregunta={pregunta.texto} id={pregunta.id} addChange={addChanges}/>}
                        {pregunta.tipo.descripcion === 'RadioGroup'&& (
                            <EditRadioGroup pregunta={pregunta} id={pregunta.id} addChange={addChanges} changeOption={changeOption}/>
                        )}
                        {pregunta.tipo.descripcion === 'Select'&& (
                           <EditSelect pregunta={pregunta} id={pregunta.id} addChange={addChanges} changeOption={changeOption}/>
                        )}
                        
                    </div>
                    
                ))}
               <BotonConfirmarEdicion changes={changes}/>
            </div>
           )}
           
        </div>
    )
}