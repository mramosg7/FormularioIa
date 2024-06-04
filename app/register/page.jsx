'use client'

import { useFormState, useFormStatus } from 'react-dom';
import {register} from '../lib/actions.js';
import { signIn } from 'next-auth/react';
import Link from 'next/link.js';
import { FaGoogle } from "react-icons/fa";
import { CorrectArlert, ErrorArlert } from '../ui/alertas.jsx';
import { useEffect, useState } from 'react';
import { toast, Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Register(){
    const [errorMesagge, dispacher] = useFormState(register, undefined);
    const [passwordError, setpasswordError] = useState(false);

    useEffect(() => {
        if (errorMesagge?.success) {
            toast.success("¡Te has registrado con exito!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
                document.querySelectorAll('input').forEach(input => input.value = '');
        }
    }, [errorMesagge]);

    const handleChange = (e) => {
        console.log(e.target.value, document.getElementById('password').value)
        if(e.target.value != document.getElementById('password').value){
            setpasswordError(true);
        }else{
            setpasswordError(false);
        
        }
    }
    return(
        <>
            <div className='bg-secondary-100 w-full h-full flex justify-center items-center flex-col gap-5 text-white'>
                <form action={dispacher} className='bg-secondary-300 w-[80%] md:w-[50%] xl:w-[30%] text-center rounded-md shadow flex flex-col gap-5 p-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-[25px] text-center'>Registrarse</h1>
                        <p>Crea una cuenta de forma segura y gratuita</p>
                    </div>
                    <div>
                        <input className={`bg-secondary-100 p-3 rounded-xl focus:outline-none ${errorMesagge?.error ? 'border-[3px] border-red-500' : ''} w-full`} type="email" placeholder='Email' name="email" id="email" required/>
                        {errorMesagge?.error && <p className='text-red-500 w-full text-left mx-3 '>El nombre de usuario o el correo ya esta en uso</p>}
                    </div>
                    <input className='bg-secondary-100 p-3 rounded-xl focus:outline-none' type="text" placeholder='Nombre y apellido' name="name" id="name" required/>
                    <div>
                        <input className={`bg-secondary-100 p-3 rounded-xl w-full focus:outline-none ${errorMesagge?.error ? 'border-[3px] border-red-500' : ''}`} type="text" placeholder='Nombre de usuario' name="nick" id="nick" required/>
                        {errorMesagge?.error && <p className='text-red-500 w-full text-left mx-3'>El nombre de usuario o el correo ya esta en uso</p>}
                    </div>

                    <input className='bg-secondary-100 p-3 rounded-xl focus:outline-none' type="password" placeholder='Contraseña' name="password" id="password" required/>
                    <div>
                        <input onChange={(e)=>{handleChange(e)}} className={`w-full bg-secondary-100 p-3 rounded-xl focus:outline-none ${passwordError ? 'border-[3px] border-red-500' : ''}`} type="password" placeholder='Confirmar contraseña' name="conpassword" id="conpassword" required/>
                        {passwordError && <p className='text-red-500 w-full text-left mx-3'>Las contraseñas no coinciden</p>}
                    </div>
        
                    <ButtonSubmit />

                </form>
                <div className="flex gap-5 items-center">
                    <div className="h-[2px] w-[250px] rounded bg-gradient-to-r to-primary-400 from-transparent"></div>
                    <p className="text-primary-400 font-bold ">O inicia sesión con </p>
                    <div className="h-[2px] w-[250px] rounded bg-gradient-to-l to-primary-400 from-transparent"></div>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <button className='flex items-center justify-center gap-4 text-[20px] hover:bg-white/90 w-[200px] py-2 bg-white text-black font-semibold rounded-md' onClick={()=>{
                        signIn('google')
                    }}><FaGoogle />Google</button>
                    <p>¿Ya tienes una cuenta? <Link className='text-blue-500 underline hover:text-blue-700' href={'/login'}>Iniciar sesión</Link></p>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
function ButtonSubmit(){
    const {pending} = useFormStatus();
    return(
        <button className={`py-2  rounded hover:bg-primary-100/80 font-semibold ${pending ? 'bg-primary-100/80': 'bg-primary-100'}`}>Registrarse</button>
    )
}