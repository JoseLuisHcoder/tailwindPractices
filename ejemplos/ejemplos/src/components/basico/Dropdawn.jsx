import React, { useState } from "react";
import {
  RiHome6Line,
  RiMenu3Fill,
  RiCloseLine,
  RiSearch2Line,
  RiChat1Line,
  RiNotification3Line,
  RiArrowDownSLine,
  RiCheckboxBlankCircleFill,
  RiThumbUpLine,
  RiUser3Line,
} from "react-icons/ri";
import { Menu, Transition } from "@headlessui/react";

const Dropdawn = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-orange-200 min-h-screen">
      {/* Sidebar */}
      <div
        className={`
         "--ocultar Menu--"  
          transition-all ${showMenu ? "left-0" : "-left-full"} 

          "---Para que en pc se muestre el menu y desaparesca el icono de menu"
          xl:left-0

          fixed w-3/4 md:w-96 z-50 p-8 h-full bg-gray-100 flex flex-col justify-between`}
      >
        <div>
          <h1 className="text-2xl uppercase font-bold mb-18">Tu Logo</h1>
          <ul>
            <li>
              <a
                href="#"
                className="flex py-2 px-4 items-center gap-4 hover:bg-gray-200  rounded-lg"
              >
                <RiHome6Line /> Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex py-2 px-4 items-center gap-4 hover:bg-gray-200  rounded-lg"
              >
                <RiHome6Line /> Classes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex py-2 px-4 items-center gap-4 hover:bg-gray-200  rounded-lg"
              >
                <RiHome6Line /> Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex py-2 px-4 items-center gap-4 hover:bg-gray-200  rounded-lg"
              >
                <RiHome6Line /> Learnin Plan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex py-2 px-4 items-center gap-4 hover:bg-gray-200  rounded-lg"
              >
                <RiHome6Line /> Chat
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 pb-10">
          <img
            className="w-10 h-10 rounded-full ring-4 ring-white object-cover"
            src="https://img.freepik.com/foto-gratis/imagen-modelo-morena-segura-si-misma-chica-ve-asertiva-lista-cruza-brazos-sobre-pecho-como-cara-presumida-profesional-sonriente-pie-sobre-fondo-blanco_176420-47089.jpg?w=740&t=st=1682190058~exp=1682190658~hmac=7290eff5da6f5c752f799009468f82211d7c2bd3c4ca298f1b97dcac18459fc7"
            alt=""
          />
          <div>
            <h5 className="font-medium ">Sofia linda HHHH</h5>
            <p className="text-gray-500 text-sm">Ing. de Software</p>
          </div>
        </div>
      </div>
      {/* Boton menu Movil */}
      <button
        onClick={toogleMenu}
        className={` 
        "---para que en pc se oculte el boton de menu"
        lg:hidden

        fixed bottom-6 right-4 p-4 rounded-full bg-gray-100`}
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      {/* Header */}
      <header
        className={`fixed  w-full p-4 gap-2  bg-gray-100 flex justify-between
        "---------con padding left-"
        "pl-96"
        "w-full"
        "----con margin left el wiht debe hacer un calculo y sea Responsive"
        xl:w-[calc(100%-384px)]
        xl:ml-96
"-----modo responsive movil"
     flex-col md:flex-row
    

        `}
      >
        <form
          action=""
          className={`flex items-center justify-center
        "----en modo responsive este esta encima y lo bajamos con"
        order-1
        md:order-none
        `}
        >
          <div className="relative ">
            <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-white  rounded-full pl-10  py-1 pr-2 outline-none"
            />
          </div>
        </form>
        <nav className="flex justify-center gap-2 items-center">
          <Menu as="div">
            <Menu.Button className="hover:bg-gray-200 p-2 rounded-lg transition-colors relative">
              <RiChat1Line />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="section"
                className={`absolute top-8 w-72 rounded-lg  bg-gray-100 p-4 shadow-lg
                "----la ventana aparece amedias en movil"
                   md:right-0
                `}
              >
                <h1 className="font-medium text-center mb-4">Messages</h1>
                <hr className="py-2" />
                <div>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 hover:bg-white transition-colors rounded-lg"
                    >
                      <img
                        className="w-6 h-6 rounded-full  ring-white object-cover"
                        src="https://img.freepik.com/foto-gratis/imagen-modelo-morena-segura-si-misma-chica-ve-asertiva-lista-cruza-brazos-sobre-pecho-como-cara-presumida-profesional-sonriente-pie-sobre-fondo-blanco_176420-47089.jpg?w=740&t=st=1682190058~exp=1682190658~hmac=7290eff5da6f5c752f799009468f82211d7c2bd3c4ca298f1b97dcac18459fc7"
                        alt=""
                      />
                      <div>
                        <h5 className="text-base">Sofia HHH</h5>
                        <p className="text-gray-400 text-sm">
                          Esto es una buena operacion
                        </p>
                      </div>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 hover:bg-white transition-colors rounded-lg"
                    >
                      <img
                        className="w-6 h-6 rounded-full  ring-white object-cover"
                        src="https://img.freepik.com/foto-gratis/imagen-modelo-morena-segura-si-misma-chica-ve-asertiva-lista-cruza-brazos-sobre-pecho-como-cara-presumida-profesional-sonriente-pie-sobre-fondo-blanco_176420-47089.jpg?w=740&t=st=1682190058~exp=1682190658~hmac=7290eff5da6f5c752f799009468f82211d7c2bd3c4ca298f1b97dcac18459fc7"
                        alt=""
                      />
                      <div>
                        <h5 className="text-base">Sofia HHH</h5>
                        <p className="text-gray-400 text-sm">
                          Esto es una buena operacion
                        </p>
                      </div>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 hover:bg-white transition-colors rounded-lg"
                    >
                      <img
                        className="w-6 h-6 rounded-full  ring-white object-cover"
                        src="https://img.freepik.com/foto-gratis/imagen-modelo-morena-segura-si-misma-chica-ve-asertiva-lista-cruza-brazos-sobre-pecho-como-cara-presumida-profesional-sonriente-pie-sobre-fondo-blanco_176420-47089.jpg?w=740&t=st=1682190058~exp=1682190658~hmac=7290eff5da6f5c752f799009468f82211d7c2bd3c4ca298f1b97dcac18459fc7"
                        alt=""
                      />
                      <div>
                        <h5 className="text-base">Sofia HHH</h5>
                        <p className="text-gray-400 text-sm">
                          Esto es una buena operacion
                        </p>
                      </div>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 hover:bg-white transition-colors rounded-lg"
                    >
                      <img
                        className="w-6 h-6 rounded-full  ring-white object-cover"
                        src="https://img.freepik.com/foto-gratis/imagen-modelo-morena-segura-si-misma-chica-ve-asertiva-lista-cruza-brazos-sobre-pecho-como-cara-presumida-profesional-sonriente-pie-sobre-fondo-blanco_176420-47089.jpg?w=740&t=st=1682190058~exp=1682190658~hmac=7290eff5da6f5c752f799009468f82211d7c2bd3c4ca298f1b97dcac18459fc7"
                        alt=""
                      />
                      <div>
                        <h5 className="text-base">Sofia HHH</h5>
                        <p className="text-gray-400 text-sm">
                          Esto es una buena operacion
                        </p>
                      </div>
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="div">
            <Menu.Button className="hover:bg-gray-200 p-2 rounded-lg transition-colors relative">
              <RiNotification3Line />
              <RiCheckboxBlankCircleFill className="absolute top-1 right-1 text-[10px] text-orange-400" />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="section"
                className="absolute top-8 w-72 rounded-lg md:right-0 left-0 bg-gray-100 p-4 shadow-lg
                
                "
              >
                <h1 className="font-medium text-center mb-4">Notificaciones</h1>
                <hr className="py-2" />
                <div>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 hover:bg-white transition-colors rounded-lg"
                    >
                      <RiThumbUpLine className="bg-blue-100 text-blue-900 p-2 box-content rounded-full" />
                      <div>
                        <h5 className="text-base">
                          A Sofia le gusto tu publicacion y tu{" "}
                          <span className="font-bold">foto</span>
                        </h5>
                      </div>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 hover:bg-white transition-colors rounded-lg"
                    >
                      <RiThumbUpLine className="bg-blue-100 text-blue-900 p-2 box-content rounded-full" />
                      <div>
                        <h5 className="text-base">
                          A Sofia le gusto tu publicacion y tu{" "}
                          <span className="font-bold">foto</span>
                        </h5>
                      </div>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 hover:bg-white transition-colors rounded-lg"
                    >
                      <RiThumbUpLine className="bg-blue-100 text-blue-900 p-2 box-content rounded-full" />
                      <div>
                        <h5 className="text-base">
                          A Sofia le gusto tu publicacion y tu{" "}
                          <span className="font-bold">foto</span>
                        </h5>
                      </div>
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="div">
            <Menu.Button className="hover:bg-gray-200 flex p-2 rounded-lg transition-colors relative">
              <img
                className="w-6 h-6 rounded-full  ring-white object-cover"
                src="https://img.freepik.com/foto-gratis/imagen-modelo-morena-segura-si-misma-chica-ve-asertiva-lista-cruza-brazos-sobre-pecho-como-cara-presumida-profesional-sonriente-pie-sobre-fondo-blanco_176420-47089.jpg?w=740&t=st=1682190058~exp=1682190658~hmac=7290eff5da6f5c752f799009468f82211d7c2bd3c4ca298f1b97dcac18459fc7"
                alt=""
              />
              <span>Sofia HHH</span>
              <RiArrowDownSLine />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="section"
                className="absolute top-8 w-72 rounded-lg right-0 bg-gray-100 p-4 shadow-lg"
              >
                <div>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 hover:bg-white transition-colors rounded-lg"
                    >
                      <img
                        className="w-6 h-6 rounded-full  ring-white object-cover"
                        src="https://img.freepik.com/foto-gratis/imagen-modelo-morena-segura-si-misma-chica-ve-asertiva-lista-cruza-brazos-sobre-pecho-como-cara-presumida-profesional-sonriente-pie-sobre-fondo-blanco_176420-47089.jpg?w=740&t=st=1682190058~exp=1682190658~hmac=7290eff5da6f5c752f799009468f82211d7c2bd3c4ca298f1b97dcac18459fc7"
                        alt=""
                      />
                      <div>
                        <h5 className="text-base">Sofia HHH</h5>
                        <p className="text-gray-400 text-sm">Sofia@gmail.com</p>
                      </div>
                    </a>
                  </Menu.Item>
                  <hr className="py-2" />
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 hover:bg-white transition-colors rounded-lg"
                    >
                      <RiUser3Line />
                      Profile
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 hover:bg-white transition-colors rounded-lg"
                    >
                      <RiUser3Line />
                      Contact
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 hover:bg-white transition-colors rounded-lg"
                    >
                      <RiUser3Line />
                      Settings
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 hover:bg-white transition-colors rounded-lg"
                    >
                      <RiUser3Line />
                      Log out
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </nav>
      </header>
    </div>
  );
};

export default Dropdawn;
