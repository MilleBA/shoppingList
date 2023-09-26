import connectMongoDB from "@/lib/mongodb";
import Items from "@/models/items";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {name, items} = await request.json();
    await connectMongoDB();
    await Items.create({name, items});
    return NextResponse.json({message: "Items Created"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const items = await Items.find();
    return NextResponse.json({items});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Items.findByIdAndDelete(id);
    return NextResponse.json({message: "Items deleted"}, {status: 200});
}