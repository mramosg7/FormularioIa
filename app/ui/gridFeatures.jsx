const features = [
    {
        img: "",
        title: "Rapido y facil puesta en mantenimiento",
        description: "Con nuestra nueva mecanica de inteligencia artificial, crea formulario en tiempo record y de forma facil e intuitiva"
    },
    {
        img: "",
        title: "Analisiss de datos",
        description: "Analiza las respuestas de los usuarios de forma rapida y sencilla, gracias a nuestros analisis exrtensos y detallados"
    },
    {
        img: "",
        title: "Integracion de IA",
        description: "Con nuestra nueva mecanica de inteligencia artificial, crea formulario en tiempo record y de forma facil e intuitiva"
    },
    {
        img: "",
        title: "Formularios pesonalizados",
        description: "Personaliza tus formularios como quieras, con nuestra herramienta de personalizacion avanzada y facil de usar"
    }
]




export default function GridFeatures(){
    return(
        <div>
           {features.map((feature) => (
               <div key={feature.title} >
                    <img src={feature.img} alt={feature.title}/>
                    <div>
                        <h1>{feature.title}</h1>
                        <p>{feature.description}</p>
                    </div>
               </div>
           ))}
        </div>
    )
}