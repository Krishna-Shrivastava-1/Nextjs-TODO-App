import connectmongodb from "@/libs/mongodb"
import topic from "@/models/topic"
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, description } = await req.json()
    await connectmongodb()
    await topic.create({ title, description });
    return NextResponse.json({ message: 'Topic created Successfully' }, { status: 201 })
}

export async function GET(req) {
    await connectmongodb()
    const gettopic = await topic.find()
    return NextResponse.json(gettopic, { status: 200 })
}



export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id")
    await connectmongodb()
    await topic.findByIdAndDelete(id)
    return NextResponse.json({message:'topic deleted successfully'}, { status: 200 })
}




