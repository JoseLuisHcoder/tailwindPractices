import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import AuthLayout from "./assets/layaout/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import Page404 from "./pages/auth/Page404";
import Maquetacion from "./components/basico/Maquetacion";
import Dropdawn from "./components/basico/Dropdawn";
import Dashboard1 from "./components/dashboards/dashboard1/Dashboard1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav className="space-x-5 py-2">
        <Link className="bg-slate-200 p-2 rounded-lg" to="/portfolio">
          Portfolio
        </Link>
        <Link className="bg-slate-200 p-2 rounded-lg" to="/login">
          Login
        </Link>
        <Link className="bg-slate-200 p-2 rounded-lg" to="/register">
          Register
        </Link>
        <Link className="bg-slate-200 p-2 rounded-lg" to="/forgotpassword">
          Forgot password
        </Link>
        <Link
          className="bg-slate-200 p-2 rounded-lg"
          to="/changepassword/:token"
        >
          Change password
        </Link>
        <Link className="bg-slate-200 p-2 rounded-lg" to="/maquetacion">
          Maquetacion
        </Link>
        <Link className="bg-slate-200 p-2 rounded-lg" to="/dropdawn">
          Dropdawn
        </Link>
        <Link className="bg-slate-200 p-2 rounded-lg" to="/dashboard1">
          Dashboard1
        </Link>
      </nav>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/maquetacion" element={<Maquetacion />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/changepassword/:token" element={<ChangePassword />} />
        </Route>
        <Route path="/page404" element={<Page404 />} />
        <Route path="/dropdawn" element={<Dropdawn />} />
        <Route path="/dashboard1" element={<Dashboard1 />} />
      </Routes>
    </div>
  );
}

// JOB SECTIONS

export default App;
