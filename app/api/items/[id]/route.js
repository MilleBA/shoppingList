import connectMongoDB from "@/lib/mongodb";
import {NextResponse} from "next/server";
import Items from "@/models/items";

export async function PUT(request, {params}) {
    const {id} = params;
    const {newName: name, newItems: items} = await request.json();
    await connectMongoDB();
    await Items.findByIdAndUpdate(id, {name, items});
    return NextResponse.json({message: "Items updated"}, {status: 200});
}

export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const item = await Items.findOne({_id: id});
    return NextResponse.json({item}, {status: 200});
}

