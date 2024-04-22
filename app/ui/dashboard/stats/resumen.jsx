import 'chart.js/auto';

import{ Pie }from 'react-chartjs-2'

export default function Resumen({form, sacarEstadisticasRespuesta, data}){
    return(
        <>
            {form &&( 
                <div className='flex flex-col items-center gap-5'> 
                {form.preguntasformulario.map((pregunta) => (
                    <>
                    {pregunta.tipo.descripcion != 'Textarea' && (
                        <div className='bg-secondary-100 p-5 rounded   w-[50%] flex flex-col items-center'>
                            <div className='w-[100%]'>
                                <h1 className='font-semibold text-[17px]'>{pregunta.texto}</h1>
                                <h2>{pregunta.respuestasusuario.length} Respuestas</h2>
                            </div>
                            <div className='mt-[-50px] h-[300px] w-[300px]'>
                                <Pie 
                                    options={{
                                        maintainAspectRatio: true,
                                        plugins: {
                                            legend: {
                                            position: 'right'
                                            },
                                        },
                                    }}
                                    data={{...data,
                                    labels: pregunta.opcionespregunta.map((opcion) => opcion.text),
                                    datasets: [
                                        {
                                        ...data.datasets[0],
                                        data: sacarEstadisticasRespuesta(pregunta),
                                        },
                                    ],}} 
                                />
                            </div>
                        </div>
                    )}
                    </>
                ))}
            </div>
            )}
         </>
    )

}