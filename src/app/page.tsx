'use client'
import { useState, useEffect } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    usuario: "",
    correo: "",
    contrasena: ""
  });

  const [nombreGuardado, setNombreGuardado] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const passwordPattern = /^(?=.*[A-Z])(?=.*[\d])(?=.*[!#$%&@*?])[A-Za-z\d!#$%&@*?]{8,20}$/; 

  useEffect(() => {
    const savedName = localStorage.getItem('nombreGuardado');
    if (savedName) {
      setNombreGuardado(savedName);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.usuario.trim() || !formData.correo.trim() || !formData.contrasena.trim()) { 
      alert("Se tienen que llenar todos los campos")
      return;
    } 
    if (!emailPattern.test(formData.correo)) { 
      alert("El formato del correo es invalido");
      return;
    }
    if (!passwordPattern.test(formData.contrasena)) { 
      alert("El formato de la contraseña esta invalida. \n\nTu contraseña debe tener: \n\n- Una letra mayuscula\n- Un numero\n- Un caracter especial (#$%@&) \n - 8 a 20 caracteres.");
      return;
    }

    localStorage.setItem('nombreGuardado', formData.usuario);
    setNombreGuardado(formData.usuario);
    console.log("Saved information: ", formData);

    setFormData({
      usuario: "",
      correo: "",
      contrasena: ""
    });
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center items-justify-center min-h-screen py-10 bg-gray-100">
      <main className="relative flex flex-col gap-8 row-start-2 items-center justify-items-center py-16 bg-white shadow-lg rounded-lg p-8">
        {nombreGuardado && (
          <div className="absolute top-10 right-10 text-3xl font-bold">
            {nombreGuardado}
          </div>
        )}
        <div>
          <h1 className="text-4xl font-bold text-center mb-4">Log In</h1>
          <p className="text-center mb-4">Ingresa tus datos</p>
          <hr className="p-1 mb-4"></hr>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
          <label htmlFor="usuario" className="text-black-600">
            Nombre
          </label>
          <input 
            id="usuario" type="text" 
            value={formData.usuario} onChange={(e) => setFormData({...formData, usuario: e.target.value})} 
            className="w-full h-12 border border-purple-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="correo" className="text-black-600">
            Correo
          </label>
          <input 
            id="correo" type="email" 
            value={formData.correo} onChange={(e) => setFormData({...formData, correo: e.target.value})} 
            className="w-full h-12 border border-purple-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="contrasena" className="text-black-600">
            Contraseña
          </label>
          <input 
            id="contrasena" type="password" 
            value={formData.contrasena} onChange={(e) => setFormData({...formData, contrasena: e.target.value})} 
            className="w-full h-12 border border-purple-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-400 transition duration-300"> 
            Guardar
          </button>
        </form>
      </main>
    </div>
  );
}