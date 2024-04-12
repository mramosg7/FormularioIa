import { getFormularios } from "../../../lib/forms/forms";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import { BotonEditar } from "../../botones/botones";


export default async function ListadoForms({email}){
    const formularios = await getFormularios(email)
   
    return(
        <>
            <div className="flex flex-col gap-3">
                {formularios.map(formulario => (
                    <div className="flex items-center text-left gap-2 " key={formulario.id}>
                        <p><FaCircle className="text-green-400"/></p>
                        <p className="truncate w-[20%]">{formulario.name}</p>
                        <p className="truncate w-[50%]">{formulario.description}</p>
                        <div><BotonEditar id={formulario.id}/></div>
                        <p>Ver estadisticas</p>
                        <p>Copiar enlace</p>
                        <p>Eliminar</p>
                    </div>
                ))}
            </div>
            {/* <table className="max-w-[50px]">
                <tbody className='flex flex-col gap-2'>
                    {formularios.map(formulario => (
                        <tr className="flex gap-5 items-center" key={formulario.id}>
                            <td><FaCircle className="text-green-400"/></td>
                            <td className=" truncate ">{formulario.name}</td>
                            <td className="  truncate ">{formulario.description}</td>
                            <td className="">editar</td>
                            <td className="">ver estadisticas</td>
                            <td className="">copiar enlace</td>
                            <td className="">eliminar</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            {/* {formularios.map(formulario => (
                <div className="bg-primary-100 p-2 text-white m-2" key={formulario.id}>
                    <h1>{formulario.name}</h1>
                    <p>{formulario.description}</p>
                    <Link href={`/dashboard/forms/edit/${formulario.id}`} className="bg-wite text-black p-2">
                        <div>
                            editar
                        </div>
                    </Link>

                </div>
            ))} */}
            
        </>
    )
}