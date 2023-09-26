'use client';
import {useState} from "react";
import {useRouter} from 'next/navigation';


export default function addShoppingList() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState('');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault(); // ikke refresher page

        if (!name || !items) {
            alert('Name and items are required.');
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/items', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({name, items}),
            });
            if (res.ok) {
                router.push('/')
                router.refresh();
            } else {
                throw new Error('Failed to create the items');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='border border-slate-500 px-8 py-2' type="text" placeholder='Shopping List Name'/>
            <input
                onChange={(e) => setItems(e.target.value)}
                value={items}
                className='border border-slate-500 px-8 py-2' type="text" placeholder='Shopping List Items'/>

            <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Add Items</button>
        </form>
    )
}