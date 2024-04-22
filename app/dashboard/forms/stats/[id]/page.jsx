'use client'

import {useEffect, useState} from 'react'

import {getQuestions} from '@/app/lib/forms/forms.js'
import Resumen from '@/app/ui/dashboard/stats/resumen';
import Pregunta from '@/app/ui/dashboard/stats/pregunta';

export default function Estadisticas({params}){

    const {id} = params
    const [form, setForm] = useState(null)
    const [state, setState] = useState(1)
    const [data , setData] = useState({
        labels: [],
        datasets: [
          {
            label: '# de Votos',
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      })
    const sacarEstadisticasRespuesta= (pregunta) => {
        const estadistica = []
        pregunta.opcionespregunta.map((opcion) => {
            
            estadistica.push(pregunta.respuestasusuario.filter((respuesta) => respuesta.opcionId=== opcion.id).length)
        })

        return estadistica
    }
    useEffect(()=>{
        getQuestions(id).then((form) => {
            setForm(form)
      
        })
      
    },[id])
    
    return(
        <div className='w-[100%] px-[60px]'>
             <header className="flex justify-between items-center border-b-4 py-5">
                <h1 className="text-[25px] font-bold ">Estadisticas</h1>
            </header>
            <div className='flex mt-5 mb-5 gap-2 justify-center'>
                <h1 className={`${state === 1 ? 'border-b-2' : ''} hover:border-b-2 border-primary-100 px-2 cursor-pointer`} onClick={()=>{setState(1)}}>Resumen</h1>
                <h1 className={`${state === 2 ? 'border-b-2' : ''} hover:border-b-2 border-primary-100 hover:border-primary-100 cursor-pointer px-2`} onClick={()=>{setState(2)}}>Pregunta</h1>
                <h1 className={`${state === 3 ? 'border-b-2' : ''} hover:border-b-2 border-primary-100 hover:border-primary-100 cursor-pointer px-2`} onClick={()=>{setState(3)}}>Individual</h1>

            </div>
            {state === 1 &&  <Resumen form={form} sacarEstadisticasRespuesta={sacarEstadisticasRespuesta} data={data}/>}
            {state === 2 &&  <Pregunta form={form}/>}
            
        </div>
    )
}