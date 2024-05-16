'use server'
import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation.js';
import { revalidatePath } from 'next/cache';


export async function createForm(formS, userid){
    try{
        const prisma = new PrismaClient();
        const form = JSON.parse(formS)
       
        const newForm = await prisma.formulario.create({
            data:{
                usuarioId:userid,
                name:form.name,
                description:form.description,
            }
        })
        
        form.questions.forEach(async (question) => {
           
            const tipo = await prisma.tipopregunta.findFirst({
                where:{
                    descripcion:question.fieldType
                }
            })
        
            const newQuestion = await prisma.preguntaformulario.create({
                data:{
                    formularioId:newForm.id,
                    texto:question.text,
                    tipoId:tipo.id
                }
            })

            if(question.fieldOptions.length > 0){
                question.fieldOptions.forEach(async (option) => {
                    await prisma.opcionpregunta.create({
                        data:{
                            preguntaId:newQuestion.id,
                            text:option.text,
                            value:option.value
                        }
                    })
                })
            }
        })
        return newForm.id
    }catch (error) {
        console.error('Failed to create form:', error);
        throw new Error('Failed to create form.');
      }
}


export async function getFormularios(email){
    try{
    
        const prisma = new PrismaClient();
        const user = await prisma.usuario.findFirst({
            where:{
                email:email
            }
        })
        
        if(!user) return []
        const formularios = await prisma.formulario.findMany({
            where:{
                usuarioId:user.id
            }
        })
        return formularios
    }catch (error) {
        console.error('Failed to get forms:', error);
        throw new Error('Failed to get forms.');
      }
}

export async function getFormulario(id){
    try{
        
        const prisma = new PrismaClient();
        const formulario = await prisma.formulario.findFirst({
            where: {
                 id: id 
            },
            include: {
              preguntasformulario: {
                include: {
                  tipo: true,
                  opcionespregunta: true
                },
                orderBy: {
                    id: 'asc'
                  }
              }
            }
          });
    
        return formulario
    }catch (error) {
        console.error('Failed to get form:', error);
        throw new Error('Failed to get form.');
      }
}

export async function getQuestions(id){
    try{
        const prisma = new PrismaClient();
        const form = await prisma.formulario.findFirst({
            where: { id: id },
            include: {
                preguntasformulario: {
                include: {
                    tipo: true,
                    opcionespregunta: true,
                    respuestasusuario: true,
                },
                },
            },
            })
        return form
    }catch (error) {
        console.error('Failed to get questions:', error);
        throw new Error('Failed to get questions.');
      }
}

export async function getOptions(id){
    try{
        const prisma = new PrismaClient();
        const options = await prisma.opcionpregunta.findMany({
            where:{
                preguntaId:id
            }
        })
        return options
    }catch (error) {
        console.error('Failed to get options:', error);
        throw new Error('Failed to get options.');
      }
}


export const getLatestForms = async (email) => {
    try{
        const prisma = new PrismaClient();
    const formulariosRecientes = await prisma.usuario.findMany({
        where: {
          email: email
        },
        select: {
          formularios: {
            orderBy: {
              createdAt: 'desc'
            },
            take: 5
          }
        }
      });
      return formulariosRecientes
    }catch(error){
        console.error('Failed to get latest forms:', error);
        throw new Error('Failed to get latest forms.');
    }
    
      
}


export const getPopularForms = async (email) => {
    try{
        const prisma = new PrismaClient();
        const formulariosMasRespondidos = await prisma.formulario.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                image:true
            },
            take: 5
          });
        
          
          return formulariosMasRespondidos
    }catch(error){
        console.error('Failed to get popular forms:', error);
        throw new Error('Failed to get popular forms.');
    }
}


export const updateChanges = async (changes) => {
    try{
        const prisma =new PrismaClient();
        const { preguntas, opciones } = changes
        const preguntasIds = Object.keys(preguntas)
        const opcionesIds = Object.keys(opciones)
        
        for (const id of preguntasIds) {
            await prisma.preguntaformulario.update({
                where: {
                    id: id
                },
                data: {
                    texto: preguntas[id]
                }
            });
        }

        for (const id of opcionesIds) {
            await prisma.opcionpregunta.update({
                where: {
                    id: id
                },
                data: {
                    text: opciones[id]
                }
            });
        }
        return null;
    }catch(error){
        console.error('Failed to update changes:', error);
        throw new Error('Failed to update changes.');
    }
}

export async function saveImage(imageData, id){
    try{
        
        const imageBuffer = Buffer.from(imageData.replace(/^data:image\/\w+;base64,/, ''), 'base64');

        const imagePath = path.join(process.cwd(), 'public', `${id}.png`);
        fs.writeFile(imagePath, imageBuffer, (err) => {
            if (err) {
                console.error('Error al guardar la imagen:', err);
                throw new Error('Error al guardar la imagen');
            }
        })
        const prisma =new PrismaClient();
        await prisma.formulario.update({
            where:{
                id:id
            },
            data:{
                image:id
            }
        })
        return null;
    }catch(error){
        console.error('Failed to save image:', error);
        throw new Error('Failed to save image.');
    }
}

export async function getFormWhithQuery(query){
    try{
        const prisma = new PrismaClient();
        const form = await prisma.formulario.findMany({
            where:{
                OR:[
                    {
                        name:{
                            contains:query
                        }
                    },
                    {
                        description:{
                            contains:query
                        }
                    }
                ]
            }
        })
        return form
    }catch(error){
        console.error('Failed to get form with query:', error);
        throw new Error('Failed to get form with query.');
    }
}


export async function getFormulariosUsuarioQuery(query, email){
    try{
        const prisma = new PrismaClient();
        const formularios = await prisma.formulario.findMany({
            where: {
              AND: [
                { usuario: { email: email } }, 
                {
                  OR: [
                    { name: { contains: query } }, 
                    { description: { contains: query } } 
                  ]
                }
              ]
            },
          });
        return formularios
    }catch(error){
        console.error('Failed to get forms with query:', error);
        throw new Error('Failed to get forms with query.');
    }}



export async function deleteForms(formularios){
    try{
        const prisma = new PrismaClient();
        for (const formId of formularios) {
            // Eliminar respuestas asociadas a las preguntas de este formulario
            await prisma.respuestausuario.deleteMany({
                where: {
                    pregunta: {
                        formularioId: formId
                    }
                }
            });

            // Eliminar opciones de pregunta asociadas a las preguntas de este formulario
            await prisma.opcionpregunta.deleteMany({
                where: {
                    pregunta: {
                        formularioId: formId
                    }
                }
            });

            // Eliminar preguntas asociadas a este formulario
            await prisma.preguntaformulario.deleteMany({
                where: {
                    formularioId: formId
                }
            });
        }

        // Finalmente, eliminar los formularios
        await prisma.formulario.deleteMany({
            where: {
                id: {
                    in: formularios
                }
            }
        });
        revalidatePath('/dashboard/forms');
        return null
    }catch(error){
        console.error('Failed to delete form:', error);
        throw new Error('Failed to delete form.');
    }
}