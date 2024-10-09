"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Navbar = () => {   

    const pathname = usePathname();
    console.log(pathname)

  return (
    <nav className=' h-[100px] border-b border-gray-600 w-full  flex justify-between items-center '
      id='Navbar'
    >


                        <h1  className=' px-24  font-bold text-2xl  '> SaulDesign  </h1>
                    <ul className=' flex gap-10 px-24 cursor-pointer '>
                        {
                            ["home","projects","About us","Contact"].map((item,index) => (
                                <Link href={Url[index]}>
                               <li className={`font-bold text-xl px-2  text-[#eeeeee] ${Url[index] == pathname ? " bg-blue  rounded-[10px]    ":"hover:text-blue transition-colors duration-100"  } `}>
                                        {item}

                                </li>
                                </Link>
                            ))

                        }


                    </ul>


    </nav>
  )
}







const Url = ["/","/projects","/about","/contact"]