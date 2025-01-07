import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='w-full flex items-center justify-center p-2' >
            <div className='md:w-1/2 flex items-center justify-between w-full md:justify-around text-xl' >
                <Link href={'/'} ><h1>ToDins</h1></Link>

                <div className='cursor-pointer ' >
                    <Link href={'/addtopic'} className='flex items-center gap-x-3' > <FaPlus /> Add Topic </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
