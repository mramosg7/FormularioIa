

import { signOut } from "@/auth";
import NavLinks from "./navLinks";
import Link from "next/link";
import {MdSettings, MdOutlineLogin } from "react-icons/md";

export default function SideNav({user}){
   
    return (
        <nav className="drop-shadow-2xl w-[15%]  px-[30px] py-5 gap-6 bg-secondary-100 flex flex-col h-[100vh]  text-secondary-200">
                    <div className="flex gap-2 py-2 items-center   ">
                        <img src="/avatar.png" className="rounded-full w-[50px] h-[50px]" alt="avatar" />
                        <h1 className="truncate">{user.email}</h1>
                    </div>
                    <p className="text-gray-400 text-[14px] ml-2 ">PRINCIPAL</p>
                    <NavLinks/>
                    <div className="flex h-[100%] flex-col justify-end gap-6 ">
                        <Link href='#' className="hover:bg-secondary-300 rounded transition-colors hover:text-white p-3 flex items-center gap-2"><MdSettings className="text-[25px]"/> Ajustes</Link>
                        <form action={async()=>{
                            'use server'
                            console.log('cerrar sesion')
                            await signOut()
                        }}>
                            <button className="p-3 flex items-center gap-2 text-red-500  font-semibold"><MdOutlineLogin  className="text-red-500 text-[25px]"/>Cerrar sesión</button>
                        </form>
                        
                    </div>
                </nav>
    )
}