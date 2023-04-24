import Sidebar from "./components/Sidebar";
import "./index.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="text-white min-h-screen grid grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className=" px-8 md:col-span-5 bg-sec-900">
        <Home />
      </div>
    </div>
  );
}

export default App;
