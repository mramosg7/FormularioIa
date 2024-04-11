import { getPopularForms } from "@/app/lib/forms/forms"

export default async function FormulariosPopulares() {
    const data = await getPopularForms()
    return (
        <div className="m-6 flex flex-wrap gap-4">
            {data.map(form=>( 
                <div className="shadow-[1px_1px_8px_1px_rgb(0,0,0,0.1)] rounded p-2 flex flex-col text-center gap-2 w-[450px]" key={form.id}>
                    <h1 className="text-[17px] font-bold">{form.name}</h1>
                    <h1>{form.description}</h1>
                </div>
            ))}
        </div>
    )
}