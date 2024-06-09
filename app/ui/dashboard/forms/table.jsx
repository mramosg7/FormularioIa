'use client'

import Buscador from "../home/buscador"
import { deleteForms } from "@/app/lib/forms/forms"
import { useState } from "react"
import Link from "next/link"
import { FaRegEdit,  FaRegShareSquare } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";



export function Table({formularios}){
    const [checked, setChecked] = useState([])
    const convertirFecha = (date)=>{
        const fecha = new Date(date); 
    
        const opciones = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        };
    
        const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
    
        const fechaFormateadaConPunto = fechaFormateada.replace('.', '.');
    
        return fechaFormateadaConPunto;
    }
    const handleChange = (e) => {
        setChecked(e.target.checked ? formularios.map(formulario => formulario.id) : [])
        
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

    const handleClick= (formulario) =>{
        navigator.clipboard.writeText(`https://formularioia.netlify.app//formulario/${formulario.id}`)
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
                        <th className="px-5"></th>
                        <th className="px-5"></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {formularios.map(formulario => (
                        <tr key={formulario.id} onClick={()=>{
                            if(checked.includes(formulario.id)){
                                setChecked(prevChecked => prevChecked.filter(id => id !== formulario.id))
                            }else{
                                setChecked(prevChecked => [...prevChecked, formulario.id])
                            }
                        }} className={`${checked.includes(formulario.id) &&" bg-secondary-400/50" } cursor-pointer`}>
                            <td className="px-2  text-center "><input className="formularioCheck" type="checkbox" checked={!!checked.includes(formulario.id)} name={formulario.id} id={formulario.id} value={formulario.id} /></td>
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
                            <td className="p-2 text-center">{convertirFecha(formulario.createdAt)}</td>
                            <td className="p-2 text-center" title="Editar"><Link href={"/dashboard/forms/edit/" + formulario.id} > <button className=' bg-primary-200 p-1 rounded text-[20px] text-primary-400 hover:text-white transition-colors'><FaRegEdit /></button></Link></td>
                            <td className="p-2 text-center" title="Ver respuestas"><Link href={"/dashboard/forms/stats/" + formulario.id}><button className=' bg-primary-200 p-1 rounded text-[20px] text-primary-400 hover:text-white transition-colors'><IoIosStats /></button></Link></td>
                            <td className="p-2 text-center" title="Copiar link del formulario"><button onClick={()=>{handleClick(formulario)}} className=' bg-primary-200 p-1 rounded text-[20px] text-primary-400 hover:text-white transition-colors'><FaRegShareSquare /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}