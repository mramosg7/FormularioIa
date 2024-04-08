'use client'
import {useSession} from 'next-auth/react'
export default function Dashboard() {
    const {data} = useSession()
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}