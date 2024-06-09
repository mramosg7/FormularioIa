'use server'


import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function fetchChat(input) {
  content="Basado en la descripción, genera un objeto de encuesta con 3 campos: name (cadena) para el formulario, description (cadena) del formulario y un array de preguntas donde cada elemento tiene 2 campos: texto y fieldType, y fieldType puede ser una de estas opciones: RadioGroup, Select y Textarea; y devuélvelo en formato JSON. Para los tipos RadioGroup y Select, también devuelve un array fieldOptions con los campos text y value. Por ejemplo, para los tipos RadioGroup y Select, el array de opciones de campo puede ser [{text: 'Sí', value: 'sí'}, {text: 'No', value: 'no'}] y para los tipos Textarea, el array de opciones de campo puede estar vacío. Por ejemplo, para los tipos Textarea, el array de opciones de campo puede ser []." 
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: content,
      },
      { role: "user", content: input },

    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" }
    
  });
  console.log(content)
  console.log(completion.choices[0].message.content)
  return completion.choices[0].message.content;
}
