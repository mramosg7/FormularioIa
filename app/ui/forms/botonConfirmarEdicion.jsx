'use client'


export default function BotonConfirmarEdicion(){
    return(
        <button onClick={()=>{
            alert('Formulario editado')
        }}className="bg-primary-100 p-2 text-white">Confirmar edicion</button>
    )
}