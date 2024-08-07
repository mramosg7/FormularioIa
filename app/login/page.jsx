'use client'

import { useFormState, useFormStatus } from 'react-dom';
import {authenticate} from '../lib/actions.js';
import { signIn } from 'next-auth/react';
import Link from 'next/link.js';
import { FaGoogle } from "react-icons/fa";

export default function Login(){
    const [errorMesagge, dispacher] = useFormState(authenticate, undefined);
    return(
        <>
            <div className='bg-secondary-100 w-full h-full flex justify-center items-center flex-col gap-5 text-white'>
                <form action={dispacher} className='bg-secondary-300 w-[80%] md:w-[50%] xl:w-[30%] rounded-md shadow flex flex-col gap-5 p-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-[25px] text-center'>Iniciar Sesión</h1>
                        <p>Por favor inicia sesión con tu cuenta.</p>
                    </div>
                    
                    <input className='bg-secondary-100 p-3 rounded-xl focus:outline-none' type="email" placeholder='Email' name="email" id="email" />
                    <input className='bg-secondary-100 p-3 rounded-xl focus:outline-none' type="password" placeholder='Contraseña' name="password" id="password" />
                    <ButtonSubmit />
                
                </form>
                <div className="flex gap-5 items-center">
                    <div className="h-[2px] w-[250px] rounded bg-gradient-to-r to-primary-400 from-transparent"></div>
                    <p className="text-primary-400 font-bold ">O  </p>
                    <div className="h-[2px] w-[250px] rounded bg-gradient-to-l to-primary-400 from-transparent"></div>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <button className='flex items-center justify-center gap-4 text-[20px] hover:bg-white/90 w-[200px] py-2 bg-white text-black font-semibold rounded-md' onClick={()=>{
                        signIn('google')
                    }}><FaGoogle />Google</button>
                    <p>¿No tienes una cuenta? <Link className='text-blue-500 underline hover:text-blue-700' href={'/register'}>Regístrate</Link></p>
                </div>
            </div>
        </>
    )
}

function ButtonSubmit(){
    const {pending} = useFormStatus();
    return(
        <button className={`py-2  rounded hover:bg-primary-100/80 font-semibold ${pending ? 'bg-primary-100/80': 'bg-primary-100'}`}>Iniciar sesión</button>
    )
}