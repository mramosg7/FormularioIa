import { getFormularios } from "../../../lib/forms/forms";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import { BotonEditar, BotonStats } from "../../botones/botones";


export default async function ListadoForms({ email }) {
    const formularios = await getFormularios(email)

    return (
        <>
            <div className="bg-secondary-300 p-5 flex flex-col gap-5 rounded-xl shadow-xl">
                <div className="flex gap-5 px-5 justify-end items-center">
                    <div className="flex rounded border  border-secondary-200">
                        <input type="text" placeholder="Buscar" className="bg-secondary-300   p-2 rounded-l  text-white focus:outline-none" /> 
                        <button className=" bg-primary-100 rounded-r p-2 hover:bg-primary-100/70">Buscar</button>
                    </div>
                    <div>
                        <button className="p-2 bg-red-500 rounded">Eliminar</button>
                    </div>
                </div>
                <table>
                    <thead className="">
                        <tr >
                            <th className="py-2"><input type="checkbox" name="all" id="all" /></th>
                            <th>Formulario</th>
                            <th className="px-[50px]">Fecha</th>
                            <th className="px-5">Respuestas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formularios.map(formulario => (
                            <tr key={formulario.id}>
                                <td className="px-2 "><input type="checkbox" name={formulario.id} id={formulario.id} value={formulario.id} /></td>
                                <td className="px-2 py-3 flex">
                                    <div className="flex gap-3 items-center h-[100px]">
                                        <div className="w-[100px] h-[100px]">
                                                <img className="w-[100px] h-[100px]" src={`/${formulario.image}.png`} alt="formulario" />
                                        </div>
                                        <div className="">
                                            <p title={formulario.name} className=" ">{formulario.name}</p>
                                            <p title={formulario.description} className="text-secondary-200">{formulario.description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 text-center">21 Ene. 2024</td>
                                <td className="p-2 text-center">0</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}