'use client'
import { useState } from 'react';

export default function Counter() {

    const [counter, setCounter] = useState(10); //crear variable para contar el estado del boton, el segundo parametro 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCounter(counter + 1);
    }

    const handleSubmitRestar = (e: React.FormEvent) => {
        e.preventDefault();
        setCounter(counter - 1);
    }

    return (
        <main className =  "flex flex-col min-h-[calc(100vh-73px)] justify-center items-center">
            <h1 className = "text-4xl font-bold text-center">
                {counter}</h1>
                <hr className = "p-1"></hr>
                <form onSubmit={handleSubmit}>
                    <button
                    type = "submit"
                    className = "w-full bg-blue-500 text-white font-semibold py-2 px-4  hover: bg-blue-700 rounded-md">
                        Incrementar numero
                        </button>
                </form>
                <hr className = "p-1"></hr>
                <form onSubmit={handleSubmitRestar}>
                    <button
                    type = "submit"
                    className = "w-full bg-red-500 text-white font-semibold py-2 px-4  hover: bg-blue-700 rounded-md ">
                        Restar numero
                        </button>
                </form>
                </main>
    )
}