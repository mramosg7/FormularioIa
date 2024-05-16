import { VscError } from "react-icons/vsc";
import { MdOutlineVerified } from "react-icons/md";


export function CorrectArlert({message}){
    return(
        <div className='bg-green-100 text-green-700 rounded p-2 flex  items-center gap-2 text-[18px] '>
            <MdOutlineVerified className="text-[25px] hidden sm:block"/>
            <p>{message}</p>
        </div>
    )
}

export function ErrorArlert({message}){
    return(
        <div className='bg-red-100 text-red-700 rounded p-2 flex  items-center gap-2 text-[18px] '>
            <VscError className="text-[25px] hidden sm:block"/>
            <p>{message}</p>
        </div>
    )
}