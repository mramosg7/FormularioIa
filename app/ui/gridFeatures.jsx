const features = [
    {
        img: "/features/puestaEnMarcha.png",
        title: "Rapido y facil",
        description: "Con nuestra nueva mecanica de inteligencia artificial, crea formulario en tiempo record y de forma facil e intuitiva",
        size:"1"
    },
    {
        img: "/features/analisis.svg",
        title: "Analisiss de datos",
        description: "Analiza las respuestas de los usuarios de forma rapida y sencilla, gracias a nuestros analisis exrtensos y detallados",
        size:"2",
    },
    {
        img: "",
        title: "Integracion de IA",
        description: "Con nuestra nueva mecanica de inteligencia artificial, crea formulario en tiempo record y de forma facil e intuitiva",
        size:"2"
    },
    {
        img: "",
        title: "Formularios pesonalizados",
        description: "Personaliza tus formularios como quieras, con nuestra herramienta de personalizacion avanzada y facil de usar",
        size:"1"
    }
]




export default function GridFeatures(){
    return(
        <div className="grid grid-cols-3 grid-rows-2 gap-4  ">
           {features.map((feature) => (
               <div key={feature.title} className={`relative ${feature.size === "2" ? "col-span-2" : ""} bg-secondary-300 shadow-lg shadow-black/20 rounded p-3 border flex justify-center items-center gap-5 border-secondary-200/20`} >
                    <div className="z-10 flex flex-col gap-5">
                        <h1 className="text-[28px]">{feature.title}</h1>
                        <p>{feature.description}</p>
                    </div>
               </div>
           ))}
        </div>
    )
}