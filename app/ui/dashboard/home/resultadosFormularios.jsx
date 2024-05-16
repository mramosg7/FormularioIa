import { getFormWhithQuery } from "@/app/lib/forms/forms";
import Link from "next/link";

export default async function ResultadosFormularios({query}) {
    console.log(query)
    const formularios = await getFormWhithQuery(query);
    console.log(formularios)

    return (
        <>
            <h1 className="px-[60px] text-[25px] my-5">Busqueda de {query}:</h1>
            <div className="px-[60px] flex flex-wrap gap-5 ">
                {formularios.map((form) => (
                    <Link href={"/formulario/" + form.id} key={form.id} className="bg-secondary-300 hover:bg-secondary-300/60 p-3 flex flex-col gap-2 items-center overflow-hidden rounded shadow">
                        <div className=" overflow-hidden rounded">
                            <img className="w-[150px] h-[100px]" src={form.image + ".png"} alt={form.name}/>
                        </div>
                        <div>
                            <h1 title={form.name} className="truncate overflow-hidden w-[200px]">{form.name}</h1>
                            <p title={form.description} className="text-secondary-200 truncate overflow-hidden w-[200px]">{form.description}</p>
                        </div>
                        
                    </Link>
                ))}
            </div>
        </>
    )
}
