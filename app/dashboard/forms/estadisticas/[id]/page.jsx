'use client'

import{ Pie }from 'react-chartjs-2'
import {useEffect, useState} from 'react'
import 'chart.js/auto';
import {getQuestions} from '@/app/lib/forms/forms.js'

export default function Estadisticas({params}){

    const {id} = params
    const [form, setForm] = useState(null)
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
        <div>
            {form &&( 
               <div> 
                {form.preguntasformulario.map((pregunta) => (
                    <>
                     {pregunta.tipo.descripcion != 'Textarea' && <Pie data={{...data,
                        labels: pregunta.opcionespregunta.map((opcion) => opcion.text),
                        datasets: [
                            {
                            ...data.datasets[0],
                            data: sacarEstadisticasRespuesta(pregunta),
                            },
                        ],}} />}
                    </>
                ))}
            </div>
            )}
            
        </div>
    )
}