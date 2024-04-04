'use client'
import { useFormState, useFormStatus } from 'react-dom';
import { generateForm } from '../lib/actions.js';

export function InputOpenia ({setView})  {
 
const [errorMesagge, dispatch] = useFormState(generateForm, undefined);

    return (
      <div onClick={()=>{setView(false)}} className='absolute w-[100vw] h-[100vh] bg-[rgb(0,0,0,.8)]  flex items-center justify-center top-0 left-0'>
        <form className='opacity-full flex flex-col' action={dispatch} onClick={ (e)=>{e.stopPropagation()}}>
            <textarea className='rounded border-[2px] p-3 border-primary-100' placeholder="Escribe aqui tu idea para el formulario. Por ejemplo: Creame un formulario para una empresa de Marketing" type="text" name="text" id="text" minLength={1} cols={50} rows={10} style={{resize:'none'}} required/>
            <SubmitButton />
        </form>
      </div>
    );
};

 function SubmitButton() {
    const { pending } = useFormStatus();
   
    return (
      <button className="bg-primary-100 rounded mt-2 text-white p-1" aria-disabled={pending}>
        Crear
      </button>
    );
  }

export default InputOpenia;