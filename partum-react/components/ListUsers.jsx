import React from 'react'

export default function List({ data }) {
    return (
        <ul className='flex gap-x-10'>
        {
            data.map((item) =>
                <li key={item.id}><a href={item.href}>
                    {item.title}
                </a></li>
            )
        }
        </ul>
    )
}
