import { getFormularios, getFormulariosUsuarioQuery } from "../../../lib/forms/forms";
;
import { Table } from "./table";



export default async function ListadoForms({ email, query }) {

    const formularios = query ? await getFormulariosUsuarioQuery(query,email) : await getFormularios(email)

    return (
        <>
            <div className="bg-secondary-300 p-5 flex flex-col gap-5 rounded-xl shadow-xl">
                
                <Table formularios={formularios} />
            </div>
        </>
    )
}