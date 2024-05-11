'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

import Link from "next/link.js";
import Slider from "./ui/slider";

export default function Home() {
  return (
    <HeroHighlight>
      <motion.h1
        
        className="flex flex-col items-center text-white h-[100vh]"
      >
    
     <header className="bg-secondary-300 shadow-xl shadow-black/20 text-[20px] p-5 flex items-center justify-between rounded-xl border border-secondary-200/30 text-white mt-5 w-[75%] ">
            <div>
                <img src="/logo.png" className="w-[200px]" alt="logo"/>
            </div>
            <div className="flex gap-5">
              <Link href="/dashboard">Inicio</Link>
              <Link href="/dashboard">Sobre nosotros</Link>
              <Link href="/dashboard">Contactanos</Link>
              <Link href="/login">Login</Link>
              <Link href="/login">Register</Link>
              
              
              
            </div>
        </header>
        <section className=" w-[50%] flex flex-col items-center gap-5 py-5 my-5">
          
            <p className="w-[150px] border border-secondary-200/20 text-white p-3 rounded bg-secondary-300/40">Integracion de IA</p>
            <h1 className="text-[60px] text-center"><span>Aumenta</span> la eficiencia de la empresarrrr</h1>
            <p>Con nuestra nueva mecanica de inteligencia artificial, crea formulario en tiempo record y de forma facil e intuitiva</p>

            
            <div className="relative after:rounded after:content-[''] after:top-0 after:bg-gradient-to-t after:from-secondary-100 after:to-transparent after:absolute after:w-[100%] after:z-9 after:h-[100%]">
              <img className="rounded" src="/preview.png" alt="Previsualizacion de la pagina"/>
              
            </div>
            <div className="text-white relative gap-2 mt-[-70px] z-10 w-[100%] after:content-[''] after:w-[20%] after:h-[100%] after:top-0  after:bg-gradient-to-r after:from-secondary-100 after:to-transparent after:absolute after:z-10  before:content-[''] before:w-[20%] before:h-[100%] before:right-0  before:bg-gradient-to-l before:from-secondary-100 before:to-transparent before:absolute before:z-10">
              <Slider/>
            </div>
            <section>
              <p>Como funciona</p>
              <h1>Formularios revolucionarios</h1>
              <p>Crea formularios como en ninguna otra pagina, de forma sencilla y rapida gracias a nuesta IA</p>
              <div>
                
              </div>
            </section>
          
          
        </section>
        
      </motion.h1>
    </HeroHighlight>
      
   
  );
}
