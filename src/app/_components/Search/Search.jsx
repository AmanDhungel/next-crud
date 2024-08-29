'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react'

const Search = () => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();
  
    
    const handleSearch = (e) => {
      const params = new URLSearchParams(searchParams);
     
  
      if(e.target.value){
          params.set('q', e.target.value);
           
        }else {
          params.delete('q');
        }
  
      replace(`${pathname}?${params}`)
    }
  
  return (
    <div className="flex w-1/4 items-center gap-[10px] bg-gray-700 p-[10px] rounded-xl">
    <input type="text" placeholder='Search' className="flex bg-transparent  focus:outline-none" onChange={handleSearch}/>
  </div>
  )
}

export default Search