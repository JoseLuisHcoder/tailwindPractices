import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import AuthLayout from "./assets/layaout/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import Page404 from "./pages/auth/Page404";

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
        <Link className="bg-slate-200 p-2 rounded-lg" to="/changepassword">
          Change password
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
        </Route>
        <Route path="/page404" element={<Page404 />} />
      </Routes>
    </div>
  );
}

// JOB SECTIONS

export default App;
