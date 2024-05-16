import { IoStatsChart } from "react-icons/io5";
import { BiSolidCustomize } from "react-icons/bi";
import { GiArtificialHive } from "react-icons/gi";
const features = [
    {
        img: "/features/analisis.svg",
        title: "Analisiss de datos",
        description: "Analiza las respuestas de los usuarios de forma rapida y sencilla, gracias a nuestros analisis exrtensos y detallados",
        icon: <IoStatsChart />
    },
    {
        img: "",
        title: "Integracion de IA",
        description: "Con nuestra nueva mecanica de inteligencia artificial, crea formulario en tiempo record y de forma facil e intuitiva",
        icon:<GiArtificialHive />
    },
    {
        img: "",
        title: "Formularios pesonalizados",
        description: "Personaliza tus formularios como quieras, con nuestra herramienta de personalizacion avanzada y facil de usar",
        icon:<BiSolidCustomize />
    }
]




export default function GridFeatures(){
    return(
        <div className="flex flex-wrap gap-10 justify-center">
           {features.map((feature) => (
               <div key={feature.title} className="bg-secondary-300 hover:bg-primary-100 text-white flex flex-col gap-5 p-5 rounded w-[400px] shadow border-secondary-200/20 border transition-colors" >
                    <div className="flex justify-center">
                        <div className="p-5 rounded-full bg-secondary-100/50 text-primary-100 font-bold text-[25px]">{feature.icon}</div>
                    </div>
                    <div className="z-10 flex flex-col gap-2">
                        <h1 className="text-[25px] font-bold">{feature.title}</h1>
                        <p className="text-[13px] text-white/70">{feature.description}</p>
                    </div>
               </div>
           ))}
        </div>
    )
}