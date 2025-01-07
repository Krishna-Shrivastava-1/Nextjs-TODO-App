'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Editopicform = ({ data }) => {
  useEffect(() => {
    if (data) {
        setnewtitle(data?.title || '');
        setnewdescription(data?.description || '');
    }
}, [data]);
  
  const router = useRouter()
  const [newtitle, setnewtitle] = useState('')
  const [newdescription, setnewdescription] = useState('')
console.log(data)

  const handleupdate = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`todins-cgi43urz4-krishnas-projects-c08681f0.vercel.app/api/topicsroute/${data?._id}`, {
        newtitle,
        newdescription
      })
      console.log('updated')
      router.back()
    } catch (error) {
      console.log(error)
    }
  }

  // console.log(alltopic)
  return (
    <div>
      <form onSubmit={handleupdate} className='w-full flex items-center justify-center flex-col gap-y-3' >
        <input value={newtitle} onChange={(e) => setnewtitle(e.target.value)} type="text" placeholder='Edit Title' className='bg-slate-900 text-xl outline-none px-2 w-[40%]' />
        <textarea value={newdescription} onChange={(e) => setnewdescription(e.target.value)} type="text" placeholder='Edit Topic Description' className='bg-slate-900 text-xl outline-none px-2 w-[40%] whitespace-pre' />
        <button type='submit' className='bg-green-600 p-2' >Update Topic</button>
      </form>
    </div>
  )
}

export default Editopicform
