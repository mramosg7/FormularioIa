import Link from "next/link"
import { auth } from "@/auth"
import { MdHome, MdDashboard,MdSettings, MdOutlineLogin } from "react-icons/md";
import { signOut } from "@/auth";

export default async function DashboardLayout({children}){
    const {user} = await auth()
  
    return(
        <div className="flex">
            <nav className="w-[15%]  p-3 gap-6 bg-secondary-100 flex flex-col">
                <div className="flex gap-2 py-2 items-center  border-b-4 border-white">
                    <img src="/avatar.png" className="rounded-full w-[50px] h-[50px]" alt="avatar" />
                    <h1>{user.email}</h1>
                </div>
                <Link href='/dashboard' className="flex items-center gap-2"><MdHome className="text-[25px] text-[#313131] "/>Inicio</Link>
                <Link href="/dashboard/forms" className="flex items-center gap-2"><MdDashboard className="text-[25px] text-[#313131] "/>Gestion de formularios</Link>
                <div className="flex h-[100%] flex-col justify-end gap-6 ">
                    <Link href='#' className="flex items-center gap-2"><MdSettings className="text-[#313131]  text-[25px]"/> Ajustes</Link>
                    <form action={async()=>{
                        'use server'
                        console.log('cerrar sesion')
                        await signOut()
                    }}>
                        <button className="flex items-center gap-2"><MdOutlineLogin  className="text-[#313131] text-[25px]"/>Cerrar sesión</button>
                    </form>
                    
                </div>
            </nav>
            <div className="overflow-y-scroll h-[100vh] w-[85%]">
                 {children}
            </div>
           
        </div>
    )
}