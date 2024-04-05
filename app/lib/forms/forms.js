import { PrismaClient } from '@prisma/client';

export async function createForm(form, userid){
    try{
        const prisma = new PrismaClient();
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
        
    }catch (error) {
        console.error('Failed to create form:', error);
        throw new Error('Failed to create form.');
      }
}