import { getPopularForms } from "@/app/lib/forms/forms"
import Link from "next/link"

export default async function FormulariosPopulares() {
    const data = await getPopularForms()
    
   
    return (
        <div className="flex flex-col rounded gap-4 ">
            {data.map(form=>( 
                <Link href={`/formulario/${form.id}`} className="rounded flex gap-5 items-center p-3 hover:bg-black/20 " key={form.id}> 
                    
                    <img className="w-[150px] h-[100px] rounded" src={`/${form.image}.png`} alt="formulario" />
                    
                    
                    <div className="w-[65%] flex flex-col gap-2">
                        <h1 title={form.name} className=" truncate text-[17px] font-bold ">{form.name}</h1>
                        <h1 title={form.description} className=" truncate font-semibold">{form.description}</h1>
                    </div>
                    
                   
                </Link>
            ))}
        </div>
    )
}