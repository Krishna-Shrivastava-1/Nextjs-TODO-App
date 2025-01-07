'use client'
import Editopicform from '@/components/Editopicform'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EditTopic = ({ params }) => {
  const { id } = React.use(params)
  console.log(id)
  const [dat, setdat] = useState([])
  const gettpicbyid = async () => {
    try {
    const resp =  await axios.get(`todins-936qz4btl-krishnas-projects-c08681f0.vercel.app/api/topicsroute/${id}`, { cache: 'no-store' })
    setdat(resp.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    gettpicbyid()
  }, [id])
  console.log(dat)
  return (
    <div>
      <Editopicform data={dat} />
    </div>
  )
}

export default EditTopic
