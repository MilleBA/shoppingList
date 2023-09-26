'use client';
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function EditItemsForm({id, name, items}) {
    const [newName, setNewName] = useState(name);
    const [newItems, setNewItems] = useState(items);

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/items/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({newName, newItems}),
            });


            if (!res.ok) {
                throw new Error('Failed to update items');
            }
            router.refresh();
            router.push('/');

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-3'>
            <input
                onChange={(e) => setNewName(e.target.value)}
                value={newName}
                className='border border-slate-500 px-8 py-2' type="text" placeholder='Shopping List Name'/>
            <input
                onChange={(e) => setNewItems(e.target.value)}
                value={newItems}
                className='border border-slate-500 px-8 py-2' type="text" placeholder='Shopping List Items'/>

            <button
                type='submit'
                className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Update Items
            </button>
        </form>
    )
}