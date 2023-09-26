import RemoveBtn from "@/components/RemoveBtn";
import Link from "next/link";
import {PenSquare} from 'lucide-react';

const getItems = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/items', {
            cache: "no-store",

        })
        if (!res.ok) {
            throw new Error("Failed to fetch items");
        }
        return await res.json();

    } catch (error) {
        console.log("Error loading topics: ", error);
    }
}

export default async function ShoppingList() {
    const {itemsAll} = await getItems();
    return <>
        {itemsAll.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
                <div>
                    <h2 className='font-bold text-2xl'>{item.name}</h2>
                    <div>{item.items}</div>
                </div>
                <div className='flex gap-2'>
                    <RemoveBtn id={item._id}/>
                    <Link href={`/editItems/${item._id}`} className=''><PenSquare size={24}/></Link>
                </div>
            </div>
        ))}
    </>
}