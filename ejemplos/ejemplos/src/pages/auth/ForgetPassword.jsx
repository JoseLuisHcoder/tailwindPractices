import React, { useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  // Logica para mensajes de Alerta de las validaciones con react toastify
  const handleToast = (e) => {
    e.preventDefault();
    // console.log(email, password);
    if ([email].includes("")) {
      toast.error("El email es requerido", {
        theme: "light",
      });
      return;
    }
    toast.success("Se han enviado las instrucciones a tu email", {
      theme: "dark",
    });
  };
  // Fin validaciones connotifiacines

  return (
    <div className="bg-white p-8 w-full md:w-96 rounded-lg ">
      <h1 className="text-3xl font-bold upercasse text-center">
        Forgot Password
      </h1>
      <form action="" className="pb-2" onSubmit={handleToast}>
        <div className="mt-10 relative">
          <RiMailLine className="absolute  left-2 text-gray-500 top-1/2  -translate-y-1/2" />
          <input
            type="email"
            placeholder="Enter to email"
            className=" bg-slate-100 w-full  border-gray-200 outline-none py-2 px-8 focus:ring rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <button className="bg-sky-600 py-2 mt-4 hover:scale-105 transition-all  text-white w-full rounded-lg">
            Send
          </button>
        </div>
      </form>
      <div className="text-center">
        ¿Tienes una cuenta?
        <Link
          to="/login"
          className="text-sky-600 font-medium hover:underline transition-all "
        >
          Sign in
        </Link>
      </div>
      <div className="text-center">
        Crea tu cuenta
        <Link
          to="/register"
          className="text-sky-600 font-medium hover:underline transition-all "
        >
          aqui
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
