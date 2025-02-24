'use client'
import { Oranienbaum } from "next/font/google";

import { useState, useEffect } from 'react';

type ColorKey = "gray" | "red" | "green" | "orange" | "blue";

export default function Page2() {
  const [color, setColor] = useState<ColorKey>("gray");
  const [nombreGuardado, setNombreGuardado] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem('nombreGuardado');
    setNombreGuardado(savedName);
  }, []);

  const colors = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
    gray: "bg-gray-500",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {nombreGuardado && (
          <div className="absolute top-10 right-10 text-3xl font-bold">
            {`Hola, ${nombreGuardado}`}
          </div>
        )}
      <div className={`w-64 h-32 ${colors[color]} mb-4`}></div>
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setColor("red")}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Red
        </button>
        <button 
          onClick={() => setColor("blue")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Blue
        </button>
        <button 
          onClick={() => setColor("green")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Green
        </button>
        <button 
          onClick={() => setColor("orange")}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Orange
        </button>
      </div>
    </div>
  );
}