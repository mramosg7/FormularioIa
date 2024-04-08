import { getFormulario } from "@/app/lib/forms/forms";

export default async function FormularioUsuario({params}){
    const {id} = params;
    const formulario = await getFormulario(id)

    return(
        <div>
            <form>
                {formulario.preguntasformulario.map(pregunta => (
                    <div key={pregunta.id}>
                        <h1>{pregunta.texto}</h1>
                        {pregunta.tipo.descripcion === 'Textarea'&& <textarea></textarea>}
                        {pregunta.tipo.descripcion === 'RadioGroup'&& (
                            pregunta.opcionespregunta.map(opciones => (
                                <div key={opciones.id}>
                                    <input type="radio" name={pregunta.id} value={opciones.text} />
                                    <label>{opciones.text}</label>
                                </div>
                            ))
                        )}
                        {pregunta.tipo.descripcion === 'Select'&& (
                            <select>
                                {pregunta.opcionespregunta.map(opciones => (
                                    <option key={opciones.id} value={opciones.text}>{opciones.text}</option>
                                ))}
                            </select>
                        )}
                    </div>
                ))}
                <button type="submit">Enviar</button>
            </form>
        </div>
    )   
}