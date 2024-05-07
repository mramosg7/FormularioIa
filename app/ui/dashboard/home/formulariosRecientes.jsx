import { getLatestForms } from "@/app/lib/forms/forms"
import { SlOptionsVertical } from "react-icons/sl";
import { MdEdit, MdDeleteForever, MdQueryStats, MdShare  } from "react-icons/md";
import {Boton, BotonCopiar} from "@/app/ui/dashboard/home/boton";

import Link from "next/link";
export default async function FormulariosRecientes({email}) {
   
    const data = await getLatestForms(email)
  
    return (
        <div className="flex flex-col gap-4">
            
             {data[0].formularios.map(form=>( 
                <div key={form.id} className="items-center gap-5 flex p-3 hover:bg-black/20 rounded">
                    <div className="w-[150px] h-[100px] rounded bg-black">
                        
                    </div>
                    <div className=" text-white rounded-t-lg  flex flex-col gap-2  w-[65%] " >
                        <h1 className="truncate font-bold text-[17px]">{form.name}</h1>
                        <p className="truncate">{form.description}</p>
                    </div>
                    <div className=" flex ">
                        <SlOptionsVertical />
                    </div>
                   
                </div>
             ))}
        </div>
    )
}


