'use server'

import { PrismaClient } from '@prisma/client';

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
        console.log(email)
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
                }
              }
            }
          });
          console.log(formulario)
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