'use client'
import { useState } from "react";
import { InputOpenia} from "../app/ui/inputOpenia.jsx";

export default function Home() {
  const [view, setView] = useState(false);
  return (
    <>
      <section id="home" className="w-100 h-[80vh] flex justify-center items-center mx-[100px]">
        <div className="w-[50%] border">
          <h1>Home</h1>
          <p>Welcome to the home page</p>
          <button onClick={()=>{setView(prevView => !prevView)}}>Crear formulario</button>
          {view && <InputOpenia />}
        </div>
        <div className="w-[50%] border">
          <h1>imagen</h1>
        </div>
      </section>
      
    </>
  );
}
