'use client'
export default function Imgs({url}) {
    return (
       
        <img src={url} alt="" onError={(e) => {
            e.target.onerror = null; // Evita un bucle de llamadas a la función onError
            e.target.src = '/form-default.png'; // Ruta de la imagen de respaldo
          }}/>
       
    )
}