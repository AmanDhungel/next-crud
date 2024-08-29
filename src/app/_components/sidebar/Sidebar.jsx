'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { logout } from '../../utils/serverActions'

const Sidebar = () => {
  const links = [
    {
      list: "product",
      link: [
       {
        path: '/items/pant',
        name: 'pant',
       },
       {
        path: '/items/shoe',
        name: 'shoe',
       },
       {
        path: '/items/trouser-tshirt',
        name: 'trouser & T-Shirt',
       },
       {
        path: '/items/jackets',
        name: 'Jackets',
       }
      ]
    }
  ]

  const pathname = usePathname();

  return (
    <div className='sticky left-0 h-screen flex-1 bg-slate-900 w-60 p-3 pl-5'>
      <Image src='https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='logo' width={100} height={100}
       className='rounded-[100%] items-center m-auto'/>
      <h1 className='text-2xl text-bold my-5 text-center bg-gradient-to-r from-emerald-300 via-emerald-500 to-green-700 bg-clip-text'>Cloth-X</h1> 

      {links.map((item) => (
      <div key={item}>
      <p className='text-xl text-gray-500 mb-3 capitalize'>Products</p>
        <ul className='ml-5 text-lg flex flex-col gap-3'>
          {item.link.map((items) => (
          <Link href={items.path} key={items} className={`cursor-pointer hover:underline capitalize ${items.path === pathname ? 'text-blue-400 underline underline-offset-4' : ''}`}>{items.name}</Link>
        ))}
          </ul>
      </div>
      ))}
      <form action={logout}>
   <button className='bg-gray-300 p-3 text-black rounded-xl mt-3' type='submit'>{'|=>'}Logout</button>
      </form>
    </div>
  )
}

export default Sidebar