'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { BsStars } from "react-icons/bs";

import Link from "next/link.js";
import Slider from "./ui/slider";
import GridFeatures from "./ui/gridFeatures";

export default function Home() {
  return (
    <HeroHighlight>
      <motion.h1
        
        className="flex flex-col items-center text-white "
      >
    
     <header className="bg-secondary-300 shadow-xl shadow-black/20 text-[20px] p-5 flex items-center justify-between rounded-xl border border-secondary-200/30 text-white mt-5 w-[75%] ">
            <div>
                <img src="/logo.png" className="w-[200px]" alt="logo"/>
            </div>
            <div className="flex gap-5">
              <Link href="/login">Login</Link>
              <Link href="/login">Register</Link>
              
              
              
            </div>
        </header>
        <section className=" w-[100%] lg:w-[75%] xl:w-[50%] flex flex-col items-center gap-5 py-5 my-5 px-10 lg:px-0">
          
            <p className="w-[200px] flex gap-3 items-center justify-center border  border-secondary-200/20 text-white p-3 rounded bg-secondary-300/40 "><BsStars className="font-bold text-[20px]"/>Integracion de IA</p>
            <h1 className="text-[60px] text-center font-bold "><span className="bg-gradient-to-br from-primary-400 via-primary-100 to-primary-200 text-transparent bg-clip-text">Revoluciona</span> tus formularios con IA</h1>
            <p className="text-center  text-secondary-200 w-[75%]">En nuestra plataforma, te ofrecemos la solución definitiva para optimizar tus formularios mediante el uso de la inteligencia artificial.</p>

            
            <div className="relative after:rounded after:content-[''] after:top-0 after:bg-gradient-to-t after:from-secondary-100 after:to-transparent after:absolute after:w-[100%] after:z-9 after:h-[100%]">
              <img className="rounded" src="/preview.png" alt="Previsualizacion de la pagina"/>
              
            </div>
            <div className="text-white relative gap-2 mt-[-70px] z-10 w-[100%] after:content-[''] after:w-[20%] after:h-[100%] after:top-0  after:bg-gradient-to-r after:from-secondary-100 after:to-transparent after:absolute after:z-10  before:content-[''] before:w-[20%] before:h-[100%] before:right-0  before:bg-gradient-to-l before:from-secondary-100 before:to-transparent before:absolute before:z-10">
              <Slider/>
            </div>
            <section className="flex flex-col items-center text-center gap-5 mt-10">
              <div className="flex gap-5 items-center">
                <div className="h-[2px] w-[250px] rounded bg-gradient-to-r to-primary-400 from-transparent"></div>
                <p className="text-primary-400 font-bold ">Como funciona</p>
                <div className="h-[2px] w-[250px] rounded bg-gradient-to-l to-primary-400 from-transparent"></div>
              </div>
              
              <div className="flex flex-col items-center mb-5">
                <h1 className="text-[40px] font-bold "><span className="bg-gradient-to-br from-primary-400 via-primary-100 to-primary-200 text-transparent bg-clip-text">Formularios </span> innovadores</h1>
                <p className="w-[70%] text-[15px]  text-secondary-200">Ofrecemos soluciones innovadoras para tus formularios, optimizando procesos con tecnología de vanguardia.</p>
              </div>
   
              <div>
                <GridFeatures/>
              </div>
            </section>
          
          
        </section>
        
      </motion.h1>
    </HeroHighlight>
      
   
  );
}
