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
        <div className="mt-5 flex justify-center">
           {formulario && (
            <div className="flex flex-col  items-center justify-center w-[75%]" id='formulario'>
                <div className="bg-primary-100 text-white p-2 rounded-t-xl text-center w-[100%]">
                    <h1 className='font-bold text-[25px]'>{formulario.name}</h1>
                    <h3>{formulario.description}</h3>
                </div>
                <div className='bg-secondary-300 w-[100%] flex flex-col items-center p-5 gap-5'>
                {formulario.preguntasformulario.map(pregunta => (
                    <div className='p-2 flex flex-col gap-2 rounded border-l-4 border-primary-100 bg-white w-[50%]' key={pregunta.id}>
                        <input type="text"  className="rounded focus:outline-none focus:border-2 border-primary-100 p-1 font-bold text-[17px] w-[100%] whitespace-normal" defaultValue={pregunta.texto} onBlur={(e)=>{addChanges(e.target.value,pregunta.id)}}/>
                        <div className='px-5'>
                            {pregunta.tipo.descripcion === 'Textarea'&& <EditTextArea pregunta={pregunta.texto}/> }
                            {pregunta.tipo.descripcion === 'RadioGroup'&& (
                                <EditRadioGroup pregunta={pregunta} changeOption={changeOption}/>
                            )}
                            {pregunta.tipo.descripcion === 'Select'&& (
                            <EditSelect pregunta={pregunta}  changeOption={changeOption}/>
                            )}
                        </div>
                        
                    </div>
                    
                ))}
               <BotonConfirmarEdicion changes={changes} id={formulario.id}/>
               </div>
            </div>
           )}
           
        </div>
    )
}