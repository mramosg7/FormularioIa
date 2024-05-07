import { FaSearch } from "react-icons/fa";

export default function Buscador() {    
    return (
        <form className="p-2 bg-black/30 rounded text-secondary-200 transition-colors flex gap-2 items-center hover:bg-black/70">
            <input type="text" className="bg-black/0 outline-off focus:outline-none" placeholder="Buscar..." />
            <button type="submit" className=" p-1 hover:text-white/70 transition-color"><FaSearch /></button>
        </form>
    )
}