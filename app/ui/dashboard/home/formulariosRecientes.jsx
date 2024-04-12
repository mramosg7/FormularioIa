import { getLatestForms } from "@/app/lib/forms/forms"
import { MdEdit, MdDeleteForever, MdQueryStats, MdShare  } from "react-icons/md";
import {Boton, BotonCopiar} from "@/app/ui/dashboard/home/boton";

import Link from "next/link";
export default async function FormulariosRecientes({email}) {
   
    const data = await getLatestForms(email)
  
    return (
        <div className="justify-center flex flex-wrap gap-4">
            
             {data[0].formularios.map(form=>( 
                <div key={form.id}>
                    <div className="bg-primary-200 text-white rounded-t-lg p-3 flex flex-col gap-2 w-[250px] h-[150px] " >
                        <h1 className="font-bold text-[17px]">{form.name}</h1>
                        <p style={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden'
                    }}>{form.description}</p>
                    </div>
                    <div className="w-[100%] rounded-b-lg bg-[#e5e5e5] flex">
                        <BotonCopiar  id={'share'} text={'Copiar link'}><MdShare/></BotonCopiar>
                        <Boton id={'edit'} text={'Editar formulario'} formId={form.id}><MdEdit/></Boton>
                        <Boton formId={form.id} id={'stats'} text={'Ver estadisticas'}><MdQueryStats/></Boton>
                        <Boton formId={form.id} id={'delete'} text={'Eliminar formulario'}><MdDeleteForever/></Boton>
                        
                    </div>
                </div>
             ))}
        </div>
    )
}


