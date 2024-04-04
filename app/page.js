'use client'
import { useState } from "react";
import { InputOpenia} from "../app/ui/inputOpenia.jsx";

export default function Home() {
  const [view, setView] = useState(false);
  return (
    <>
      <section id="home" className="w-100 h-[80vh] flex justify-center items-center mx-[100px]">
        <div className="w-[50%] border">
          <h1 className="font-bold text-[30px] text-primary-100">Crea formularios en pocos minutos.</h1>
          <p>Con nuestra plataforma intuitiva, puedes diseñar y personalizar formularios completos en cuestión de minutos. Simplifica el proceso de recopilación de datos y obtén resultados rápidos y precisos. ¡No esperes más! Haz clic en el botón de abajo para empezar a crear tu primer formulario ahora mismo.</p>
          <button className="p-2 bg-primary-100 text-white mt-5 rounded" onClick={()=>{setView(prevView => !prevView)}}>Crear formulario</button>
          {view && <InputOpenia setView={setView}/>}
        </div>
        <div className="w-[50%] border">
          <h1>imagen</h1>
        </div>
      </section>
      
    </>
  );
}
