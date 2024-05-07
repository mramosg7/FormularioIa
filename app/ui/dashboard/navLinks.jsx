'use client'

import { MdHome, MdDashboard } from "react-icons/md";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const links = [
    {name: 'Inicio', icon: MdHome, href: '/dashboard'},
    {name: 'Gestion de formularios', icon: MdDashboard, href: '/dashboard/forms'},

    
]

export default function NavLinks(){
    const pathname = usePathname()
    return (
        <div className="flex flex-col gap-4">
            {links.map(link=>(
                <Link href={link.href} className={`${pathname === link.href ? "bg-secondary-300 text-white": ""} hover:bg-secondary-300 rounded transition-colors hover:text-white p-3 flex items-center gap-2`} key={link.name}>                 
                    <link.icon className="text-[25px]"/>
                    {link.name}
                </Link>
            ))}
        </div>

    )
}