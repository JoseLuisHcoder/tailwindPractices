import React, { useState } from "react";
import {
  RiMailLine,
  RiLock2Line,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Logica para mensajes de Alerta de las validaciones con react toastify
  const handleToast = (e) => {
    e.preventDefault();
    // console.log(email, password);
    if ([email, password].includes("")) {
      toast.error("Todos los campos son requeridos", {
        theme: "light",
      });
      return;
    }
    if (password.length < 6) {
      toast.error("El password debe contener al menos 6 caracteres", {
        theme: "dark",
      });
      return;
    }
  };
  // Fin validaciones connotifiacines

  return (
    <div className="bg-white p-8 w-full md:w-96 rounded-lg ">
      <h1 className="text-3xl font-bold upercasse text-center">Login</h1>
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

        <div className="mt-4 relative">
          <RiLock2Line className="absolute  left-2 text-gray-500 top-1/2  -translate-y-1/2" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className=" bg-slate-100 w-full  border-gray-200 outline-none py-2 px-8 focus:ring rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowPassword}
              className="absolute cursor-pointer  right-2 text-gray-500 top-1/2  -translate-y-1/2"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPassword}
              className="absolute cursor-pointer  right-2 text-gray-500 top-1/2  -translate-y-1/2"
            />
          )}
        </div>
        <div className="text-right">
          <Link
            to="/changepassword"
            className="text-gray-500 hover:text-sky-600 hover:underline transition-colors"
          >
            ¿Olvidaste tu password?
          </Link>
        </div>
        <div>
          <button className="bg-sky-600 py-2 mt-4 hover:scale-105 transition-all  text-white w-full rounded-lg">
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        ¿No tienes una cuenta?
        <Link
          to="/register"
          className="text-sky-600 font-medium hover:underline transition-all "
        >
          {" "}
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
