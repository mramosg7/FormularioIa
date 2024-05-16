'use client'

import Buscador from "../home/buscador"
import { deleteForms } from "@/app/lib/forms/forms"


export function Table({formularios}){
    const handleChange = (e) => {
        document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
            checkbox.checked = e.target.checked;
        })
    }

    const handleDelete = () =>{
        const checked = []
        document.querySelectorAll('.formularioCheck').forEach((checkbox) => {
            if(checkbox.checked && checkbox.value !== "main"){
                checked.push(checkbox.value)
            }
        })
        deleteForms(checked)
    }
    
    return(
        <>
            <div className="flex gap-5 px-5 justify-end items-center">
                <Buscador />
                <div>
                    <button className="p-2 bg-red-500 rounded" onClick={()=>{handleDelete()}}>Eliminar</button>
                </div>
            </div>
            <table>
                <thead className="">
                    <tr >
                        <th className="py-2">
                            <input 
                                type="checkbox"
                                name="all" 
                                id="all" 
                                onChange={(e) => {handleChange(e)}}
                                value='main'
                            />
                        </th>
                        <th>Formulario</th>
                        <th className="px-[50px]">Fecha</th>
                        <th className="px-5">Respuestas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {formularios.map(formulario => (
                        <tr key={formulario.id}>
                            <td className="px-2  text-center "><input className="formularioCheck" type="checkbox" name={formulario.id} id={formulario.id} value={formulario.id} /></td>
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
                            <td className="p-2 text-center">Ver respuestas</td>
                            <td className="p-2 text-center">Link</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}