import Link from "next/link"


export default function DashboardLayout({children}){
    return(
        <div className="flex">
            <nav className="w-[25%] bg-secondary-100">
                <Link href="/dashboard/forms">Forms</Link>
            </nav>
            {children}
        </div>
    )
}