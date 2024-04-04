'use server'
import { signIn } from '@/auth.js';
import {fetchChat} from './openai/openai.js';
import { redirect } from 'next/navigation.js';
export async function generateForm(
    prevState,
    formData,
  ){
    
    const text = formData.get('text');
    
    const data = await fetchChat(text)
    setLocalStorage('data', data);
    
    redirect('/tempForm')
  }

export async function authenticate(
    prevState,
    formData,
  ){
    try{
      console.log(formData)
      await signIn('credentials', formData);
    }catch (error) {
     
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        
      }
      throw error;
    }
  
  }


  