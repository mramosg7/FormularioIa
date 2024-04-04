'use server'
import { signIn } from '@/auth.js';
import {fetchChat} from './openai/openai.js';
export async function generateForm(
    prevState,
    formData,
  ){
    
    const text = formData.get('text');
    console.log( text)
    fetchChat(text).then((data) => {
         console.log(data);
     });
  }

export async function authenticate(
    prevState,
    formData,
  ){


    try{
      console.log(formData)
      await signIn('Credentials', formData);
    }catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  
  }