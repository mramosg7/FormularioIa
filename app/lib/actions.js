'use server'
import { signIn } from '@/auth.js';
import {fetchChat} from './openai/openai.js';
import { redirect } from 'next/navigation.js';
import { createForm } from './forms/forms.js';
import { AuthError } from 'next-auth';
import { PrismaClient } from '@prisma/client';

export async function getIdUser(email){
 
  try{
    const prisma = new PrismaClient();
    const user = await prisma.usuario.findFirst({
      where: {
        email: email
      }
    })
 
    return user.id
  }catch(e){
    throw e
  }
}

export async function generateForm(
    prevState,
    formData,
  ){
    
    const text = formData.get('text');
    const email = formData.get('email');

    const id = await getIdUser(email)
    
    const data = await fetchChat(text)
    const idForm = await createForm(data, id)
    
    
    redirect('/dashboard/forms/edit/' + idForm)
  }

export async function authenticate(
    prevState,
    formData,
  ){
    try {
      await signIn('credentials',formData);
    } catch (error) {
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


  