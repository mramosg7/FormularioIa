
import Link from "next/link";
import "./globals.css";
import { signOut } from "@/auth";
import { SessionProvider } from 'next-auth/react'



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        <SessionProvider>
        {children}
        </SessionProvider>
        
      </body>
    </html>
  );
}
