


import NavLinks from "./navLinks";
import MenuUsuario from "./menuUsuario";
import Link from "next/link";


export default function SideNav({user}){
    console.log(user)
    return (
        <nav className="drop-shadow-2xl w-[15%]  px-[30px] py-5 gap-6 bg-secondary-100 flex flex-col h-[100vh]  text-secondary-200">
                    <div className="flex gap-2 py-2 items-center ">
                        <img src="/logo.png" alt="Logo" />
                    </div>
                    
                    <p className="text-gray-400 text-[14px] ml-2 ">PRINCIPAL</p>
                    <NavLinks/>
                    <div className="flex h-[100%]  items-end gap-6 ">
                        <MenuUsuario user={user}/>
                    
                    
                        
                        
                    </div>
                </nav>
    )
}