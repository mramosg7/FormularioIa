import { getLatestForms } from "@/app/lib/forms/forms"

export default async function FormulariosRecientes({email}) {
   
    const data = await getLatestForms(email)
  
    return (
        <div className="m-6 flex flex-wrap gap-4">
            
             {data[0].formularios.map(form=>( 
                <div className="bg-primary-100 p-2 flex flex-col  w-[450px]" key={form.id}>
                    <h1>{form.name}</h1>
                    <h1>{form.description}</h1>
                </div>
                
             ))}
        </div>
    )
}

