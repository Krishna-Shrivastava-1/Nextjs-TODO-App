'use client'
import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { IoPencilOutline } from "react-icons/io5";
import Link from 'next/link';
import axios from 'axios';
const TopicsList = () => {
    const [alltopic, setalltopic] = useState([])
    // todins-o4n8k47an-krishnas-projects-c08681f0.vercel.app
    const gettingtopic = async () => {
        try {
            const resp = await axios.get('todins-o4n8k47an-krishnas-projects-c08681f0.vercel.app/api/topicsroute', { cache: "no-store" })
            setalltopic(resp.data)
        } catch (error) {
            console.log(error)
        }
    }
   


    const handledelete = async (id) => {
        const confirmd = confirm('Are you Sure?')
        if (confirmd) {
            await axios.delete(`todins-o4n8k47an-krishnas-projects-c08681f0.vercel.app/api/topicsroute?id=${id}`)
        }
    }

    useEffect(() => {
        gettingtopic()
    }, [handledelete])
    // console.log(alltopic)
    return (
        <div  >
            {
                alltopic.map(({ title, description, _id }) => (
                    <div key={_id} className='flex items-center flex-col w-full justify-around border-[0.5px] border-zinc-700' >
                        <div className='flex items-center justify-around w-full'>
                            <h1>{title}</h1>
                            <div className='flex gap-x-2 cursor-pointer text-2xl' >
                                <Link href={`/edittopic/${_id}`}><IoPencilOutline /></Link>

                                <MdDeleteOutline onClick={()=>handledelete(_id)} />
                            </div>
                        </div>

                        <div >
                            <h1 className='whitespace-pre' >{description}</h1>
                        </div>


                    </div>
                ))
            }


        </div>
    )
}

export default TopicsList
