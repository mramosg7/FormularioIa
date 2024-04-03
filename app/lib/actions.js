'use server'
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