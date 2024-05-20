
import Link from "next/link";
import "./globals.css";
import { signOut } from "@/auth";
import { SessionProvider } from 'next-auth/react'
import { montserrat } from "./ui/fonts";



export const metadata = {
  title: "Formularios IA",
  description: "Descubre una nueva era en la creación de formularios con nuestra plataforma Formularios IA",
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <SessionProvider>
          <body className={`${montserrat.className} h-[100vh] bg-secondary-100`}>
          
            
              {children}
          
            
          </body>
        </SessionProvider>
      </html>
  
  );
}
