import connectmongodb from "@/libs/mongodb"
import topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function PUT(req,{params}) {
    const {id} = params
    
    const {newtitle,newdescription} = await req.json()
    await connectmongodb()
    await topic.findByIdAndUpdate(id,{
        title:newtitle,
        description:newdescription
    })
    return NextResponse.json({message:'edited successfully'}, { status: 200 })
}


export async function GET(req,{params}) {
    const {id} = params
    await connectmongodb()
    const gettopicbyid = await topic.findOne({_id:id})
    return NextResponse.json(gettopicbyid, { status: 200 })
}