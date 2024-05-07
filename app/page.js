'use client'
import React, { useState } from "react";

import Link from "next/link.js";

export default function Home() {
  const [view, setView] = useState(false);
  return (
    <>
     <header className="bg-primary-100 text-[20px] px-[70px] py-[30px] h-[10%] text-white flex justify-between">
            <div>
                <h1>Logo</h1> 
            </div>
            <div>
              <Link href="/dashboard">Home</Link>
              <Link href="/login">Login</Link>
              
              
              
              
            </div>
        </header>
      <section id="home" className="text-center bg-[url('/home.png')] h-[90%] bg-center bg-cover  w-100 flex flex-col justify-center items-center px-[100px]">
        <p className=" font-semibold text-[17px] text-white/65">Experiencias interactivas y rapidas</p>
        <h1 className=" font-bold text-[50px] text-white w-[450px]">Crea tus porpios formularios con <span className="underline decoration-4 decoration-primary-100 ">IA</span></h1>
        <Link href="/dashboard/forms" className="px-5 py-2 bg-primary-100 text-white font-semibold border-2 border-primary-200 rounded hover:bg-primary-200 transition-colors cursor-pointer ">Comenzar</Link>
      </section>
      
    </>
  );
}
