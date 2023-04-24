import { Link } from "react-router-dom";
import {
  RiBarChart2Line,
  RiCalendarTodoLine,
  RiEarthLine,
  RiLogoutCircleRLine,
  RiMessage3Line,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";
import { useState } from "react";

const Sidebar = () => {
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleShowSubMenu = () => {
    setIsShowSubMenu(!isShowSubMenu);
  };
  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  return (
    <>
      <div
        className={`bg-sec-100 fixed xl:static  top-0  w-[80%]  h-full overflow-y-scroll mb-10 p-6  md:h-[100vh] flex flex-col justify-between z-50 
      "------para hacer aparecer el sidebar al apretar boton"
      ${isShowMenu ? "left-0" : "-left-full"}
      transition-all  md:w-[40%] lg:w-[30%] xl:w-auto
      `}
      >
        <div className="">
          <h1 className="text-center font-bold text-4xl pb-8">TU EMPRESA</h1>
          <nav>
            <ul>
              <li>
                <Link className="flex  text-white items-center gap-4 py-2 px-4 rounded-lg hover:bg-sec-900 transition-colors">
                  <RiBarChart2Line className="text-pri" />
                  Analiticas
                </Link>
              </li>
              <li>
                <button
                  onClick={handleShowSubMenu}
                  className="flex w-full text-white items-center justify-between  py-2 px-4 rounded-lg hover:bg-sec-900 transition-colors"
                >
                  <span className="flex items-center gap-4">
                    <RiMessage3Line className="text-pri" />
                    Redes Sociales
                  </span>
                  <RiArrowRightSLine
                    className={`${isShowSubMenu && "rotate-90"}`}
                  />
                </button>
                <ul
                  className={`my-2
              "----para que el submenu se desplaze al apretar el boton"
              ${!isShowSubMenu ? "h-[130px]" : "h-0 "}
              transition-all overflow-auto duration-300
              `}
                >
                  <li>
                    <Link
                      to="/"
                      className={`py-2 px-4 border-l border-gray-500 ml-8 block
                    "----haciendo el punto redondo"
                    relative before:w-3 before:h-3 before:absolute text-gray-300 before:bg-gray-500  before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-sec-100 hover:text-white transition-colors
                    `}
                    >
                      Post red social
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={`py-2 px-4 border-l border-gray-500 ml-8 block
                    "----haciendo el punto redondo"
                    relative before:w-3 before:h-3 before:absolute text-gray-300 before:bg-gray-500  before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-sec-100 hover:text-white transition-colors
                    `}
                    >
                      Estadisticas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={`py-2 px-4 border-l border-gray-500 ml-8 block
                    "----haciendo el punto redondo"
                    relative before:w-3 before:h-3 before:absolute text-gray-300 before:bg-gray-500  before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-sec-100 hover:text-white transition-colors
                    `}
                    >
                      Perfiles
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="flex  text-white items-center gap-4 py-2 px-4 rounded-lg hover:bg-sec-900 transition-colors">
                  <RiCalendarTodoLine className="text-pri" />
                  Calendario
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <nav>
            <Link className="flex  text-white items-center gap-4 py-2 px-4 rounded-lg hover:bg-sec-900 transition-colors">
              <RiLogoutCircleRLine className="text-pri" />
              Log out
            </Link>
          </nav>
        </div>
      </div>
      <button
        onClick={handleShowMenu}
        className="fixed bottom-4 right-4 bg-pri text-black p-3 rounded-full z-50
        xl:hidden
        "
      >
        {isShowMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
