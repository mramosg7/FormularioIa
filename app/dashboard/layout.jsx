import Link from "next/link"
import { auth } from "@/auth"
import SideNav from "../ui/dashboard/sideNav";


export default async function DashboardLayout({children}){
    const {user} = await auth()
   

  
    return(
        <div className="flex bg-secondary-100 items-center">
            <SideNav user={user}/>
           
            <div className="overflow-auto bg-secondary-100 h-[100vh] w-[85%]">
                 {children}
            </div>
           
        </div>
    )
}