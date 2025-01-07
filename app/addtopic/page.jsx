'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const addtopicpage = () => {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const router = useRouter()
    const handlesubmit = async (e)=>{
        e.preventDefault()
        try {
            const resp = await axios.post('todins-o4n8k47an-krishnas-projects-c08681f0.vercel.app/api/topicsroute',{
                title,
                description
            })
            alert(`${title} Created Successfully`)
            router.back()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form onSubmit={handlesubmit} className='w-full flex items-center justify-center flex-col gap-y-3' >
                <input onChange={(e)=>settitle(e.target.value)} type="text" placeholder='Title' className='bg-slate-900 text-xl outline-none px-2 w-[40%]' />
                <textarea onChange={(e)=>setdescription(e.target.value)} type="text" placeholder='Topic Description' className='bg-slate-900 text-xl outline-none whitespace-pre px-2 w-[40%]' />
                <button type='submit' className='bg-green-600 p-2' >Add Topic</button>
            </form>
        </div>
    )
}

export default addtopicpage
