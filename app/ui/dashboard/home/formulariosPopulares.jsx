import { getPopularForms } from "@/app/lib/forms/forms"
import { SlOptionsVertical } from "react-icons/sl";

export default async function FormulariosPopulares() {
    const data = await getPopularForms()
   
    return (
        <div className="flex flex-col rounded gap-4 ">
            {data.map(form=>( 
                <div className="rounded flex gap-5 items-center p-3 hover:bg-black/20 " key={form.id}> 
                    
                    <img className="w-[150px] h-[100px] rounded" src={`/${form.id}.png`} alt="formulario"/>
                    
                    
                    <div className="w-[65%] flex flex-col gap-2">
                        <h1 className=" truncate text-[17px] font-bold ">{form.name}</h1>
                        <h1 className=" truncate font-semibold">{form.description}</h1>
                    </div>
                    
                   
                </div>
            ))}
        </div>
    )
}