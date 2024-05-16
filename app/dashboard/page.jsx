
import Buscador from "../ui/dashboard/home/buscador"
import { Suspense } from "react"
import FormulariosRecientes from "../ui/dashboard/home/formulariosRecientes"
import FormulariosPopulares from "../ui/dashboard/home/formulariosPopulares"
import { auth } from "@/auth";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";
import ResultadosFormularios from "../ui/dashboard/home/resultadosFormularios";
export default async function Dashboard({
    searchParams,
  }) {
   const {user} = await auth();
   const query = searchParams?.query || null;

    return (
        <div className="w-[100%] text-white flex flex-col gap-5 py-5">
            <div className="px-[60px] flex justify-between items-center">
                <div>
                    <p className="text-secondary-200 text-[12px]">Hola, {user.email}</p>
                    <h1 className="  font-bold text-[32px]">Bienvenido a tu dashboard</h1>
                </div>
                <Buscador />
            </div>
            {!query && (<>
                <section className="px-[60px] w-[60%]">
                    <div className="rounded-xl bg-primary-100 text-white p-5 flex flex-col gap-2">
                        <p>Formularios IA</p>
                        <h1 className="font-bold text-[25px] w-[60%]">Crea tu propio formulario con ayuda de la inteligencia artificial</h1>
                        <Link href="/dashboard/forms" className="rounded-full w-[190px] py-2 px-[20px] bg-black text-white font bold flex gap-2 items-center">
                            <p className="">Empieza a crear</p>
                            <div className="bg-white p-1  rounded-full">
                                <IoIosArrowForward className=" text-black font-bold"/>
                            </div>
                        </Link>
                    </div>
                </section>
                <div className="mx-[60px] flex flex-col lg:flex-row gap-5 ">
                    <section className=" p-5 bg-secondary-300 flex flex-col gap-5 w-[50%] rounded-xl overflow-auto" id="formularios-recientes">
                        <h1 className="font-bold text-[32px]">Formularios recientes</h1>
                        <Suspense fallback={<h1>Cargando...</h1>}>
                            <FormulariosRecientes email={user?.email}/>
                        </Suspense>
                    </section>
                    <section className="p-5 bg-secondary-300 flex flex-col gap-5 w-[50%] rounded-xl overflow-auto">
                        <h1 className="font-bold text-[32px]">Formularios populares</h1>
                        <Suspense fallback={<h1>Cargando...</h1>}>
                            <FormulariosPopulares/>
                        </Suspense>
                    </section>
                </div>
            </>)}
            {query && <ResultadosFormularios query={query}/>}
            
            
            
        </div>
    )
}