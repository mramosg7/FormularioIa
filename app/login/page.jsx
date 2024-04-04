'use client'

import { useFormState, useFormStatus } from 'react-dom';
import {authenticate} from '../lib/actions.js';

export default function Login(){
    const [errorMesagge, dispacher] = useFormState(authenticate, undefined);
    return(
        <form action={dispacher}>
            <input type="email" name="email" id="email" />
            <input type="password" name="password" id="password" />
            <ButtonSubmit />
           
        </form>
    )
}

function ButtonSubmit(){
    const {pending} = useFormStatus();
    return(
        <button>Logearse</button>
    )
}