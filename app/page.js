'use client'
import { useState } from "react";

import Link from "next/link.js";

export default function Home() {
  const [view, setView] = useState(false);
  return (
    <>
     <header className="bg-primary-100 text-[20px] px-[70px] py-[30px] text-white flex justify-between">
            <div>
                <h1>Logo</h1>
            </div>
            <div>
              <Link href="/dashboard">Home</Link>
              <Link href="/login">Login</Link>
              <form
                action={async () => {
                  'use server';
                  
                  await signOut();
                }}
              >
                <button className="bg-primary-200 p-2"><div>Logout</div></button>
              </form>
              
              
              
            </div>
        </header>
      <section id="home" className="w-100 h-[80vh] flex justify-center items-center mx-[100px]">
        <div className="w-[50%] border">
          <h1 className="font-bold text-[30px] text-primary-100">Crea formularios en pocos minutos.</h1>
          <p>Con nuestra plataforma intuitiva, puedes diseñar y personalizar formularios completos en cuestión de minutos. Simplifica el proceso de recopilación de datos y obtén resultados rápidos y precisos. ¡No esperes más! Haz clic en el botón de abajo para empezar a crear tu primer formulario ahora mismo.</p>
          <Link href="/dashboard/forms">Crear formulario</Link>
          
        </div>
        <div className="w-[50%] border">
          <h1>imagen</h1>
        </div>
      </section>
      
    </>
  );
}
