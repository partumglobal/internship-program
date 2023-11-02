import React from 'react'
import next from 'next'

// const data = {
//     "message": "Sucesss",
//     "todos": []

// if todo ? to something : do this
// }


async function fetchTodos() {
    const res = await fetch('http://localhost:3000/api/todos',
        { next: { revalidate: 10 } })

    const data = await res.json()


    return data.todos
}

export default async function Todos() {

    const todos = await fetchTodos()
    return (
        <>
            <div className="max-w-3xl p-10 mx-auto">

                {todos?.map(todo => (
                    <div key={todo.id} className={todo.completed ? 'flex items-center justify-between p-4 mb-4 bg-slate-100 rounded-md shadow-md' : "flex items-center justify-between p-4 mb-4 bg-blue-100 rounded-md shadow-md"}>
                        <div>
                            <h1 className={todo.completed ? 'line-through ' : ''}>{todo.title}</h1>
                            <p className={todo.completed ? 'line-through ' : ''}>{todo.description}</p>
                        </div>
                        <div>
                            {todo.completed ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                            ) :
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>

                                )

                            }
                        </div>
                    </div>
                ))}



            </div>
        </>
    )
}
