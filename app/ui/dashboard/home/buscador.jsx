'use client'

import { FaSearch } from "react-icons/fa";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Buscador() { 
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const  handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    },300)

    return (
        <div className="p-2 bg-black/30 rounded text-secondary-200 transition-colors flex gap-2 items-center hover:bg-black/70">
            <input 
                type="text" 
                className="bg-black/0 outline-off focus:outline-none" 
                placeholder="Buscar..." 
                onChange={(e) => {
                    handleSearch(e.target.value);
                  }}
                defaultValue={searchParams.get('query')?.toString()}
            />

            <button type="submit" className=" p-1 hover:text-white/70 transition-color"><FaSearch /></button>
        </div>
    )
}