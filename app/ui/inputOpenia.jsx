'use client'
import { useFormState, useFormStatus } from 'react-dom';
import { generateForm } from '../lib/actions.js';

export const InputOpenia = () => {
 
const [errorMesagge, dispatch] = useFormState(generateForm, undefined);

    return (
        <form action={dispatch}>
            <input type="text" name="text" id="text"/>
            <SubmitButton />
        </form>
    );
};

 function SubmitButton() {
    const { pending } = useFormStatus();
   
    return (
      <button aria-disabled={pending}>
        Crear
      </button>
    );
  }

export default InputOpenia;