'use client'
import {logOut} from '@/app/lib/actions'
import Link from "next/link"
import {MdSettings, MdOutlineLogin } from "react-icons/md";
import { useEffect, useState } from 'react';


export default function MenuUsuario({user}){
   
    const [open, setOpen] = useState(false)
    useEffect(()=>{
        if(!open) return
        function closeMenu(e){
            if(e.target.closest('.menuUsuario') !== null) return
            setOpen(false)
        }
        document.addEventListener('click', closeMenu)
        return ()=> document.removeEventListener('click', closeMenu)
    },[open])

    return(
        <div className={`flex flex-col gap-2 menuUsuario`}>
            <div className={`bg-secondary-300 rounded p-2 ${open ? 'block': 'hidden'}`}>
                <Link href='#' className="hover:bg-secondary-300 rounded transition-colors hover:text-white p-3 flex items-center gap-2"><MdSettings className="text-[25px]"/> Ajustes</Link>
                
                <button onClick={()=>{
                    logOut()
                }} className="p-3 flex items-center gap-2 text-red-500  font-semibold"><MdOutlineLogin  className="text-red-500 text-[25px]"/>Cerrar sesión</button>
                
            </div>
            <button className="flex gap-3 py-2 items-center " onClick={()=>{setOpen(prev => !prev)}}>
                <img src="/avatar.png" className="rounded-full w-[40px] h-[40px]" alt="avatar" />
                <h1 className="truncate uppercase">{user.name}</h1>
            </button>
        </div>
        
    )
}
