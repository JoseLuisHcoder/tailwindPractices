import { RiAddLine, RiMore2Fill, RiPulseLine } from "react-icons/ri";
import {
  RiArrowDownSLine,
  RiNotification3Line,
  RiTicketLine,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const MainHome = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <div className="bg-sec-100 my-4 rounded-xl">
          <div className="flex items-center bg-sec-100 justify-between">
            <span className="">
              <RiTicketLine className="text-4xl bg-pink-500/10 text-pink-400 p-2  rounded-lg box-content" />
            </span>
            <Menu
              menuButton={
                <MenuButton className="flex mr-2 items-center gap-x-2 bg-gray-800 p-2 rounded-lg">
                  <RiMore2Fill />
                </MenuButton>
              }
              menuClassName="bg-black"
              transition
            >
              <MenuItem className="">Cut</MenuItem>
              <MenuItem>Copy</MenuItem>
              <MenuItem>Paste</MenuItem>
            </Menu>
          </div>
          {/* numero  de card */}
          <div className="p-2">
            <h1 className="text-3xl font-bold">145,451</h1>
            <p>Tickets Totales</p>
            <hr className="border-sm border-gray-500/30 my-2" />
            <span className="flex gap-2 items-center text-sky-300">
              <RiAddLine />
              <button>Agregar nuevo ticket</button>
            </span>
          </div>
        </div>
        <div className="bg-sec-100 my-4 rounded-xl">
          <div className="flex items-center bg-sec-100 justify-between">
            <span className="">
              <RiTicketLine className="text-4xl bg-yellow-500/10 text-yellow-400 p-2  rounded-lg box-content" />
            </span>
            <Menu
              menuButton={
                <MenuButton className="flex mr-2 items-center gap-x-2 bg-gray-800 p-2 rounded-lg">
                  <RiMore2Fill />
                </MenuButton>
              }
              menuClassName="bg-black"
              transition
            >
              <MenuItem className="">Cut</MenuItem>
              <MenuItem>Copy</MenuItem>
              <MenuItem>Paste</MenuItem>
            </Menu>
          </div>
          {/* numero  de card */}
          <div className="p-2">
            <h1 className="text-3xl font-bold">145,451</h1>
            <p>Tickets Totales</p>
            <hr className="border-sm border-gray-500/30 my-2" />
            <span className="flex gap-2 items-center text-sky-300">
              <RiAddLine />
              <button>Agregar nuevo ticket</button>
            </span>
          </div>
        </div>
        <div className="bg-sec-100 my-4 rounded-xl">
          <div className="flex items-center bg-sec-100 justify-between">
            <span className="">
              <RiTicketLine className="text-4xl bg-orange-500/10 text-orange-400 p-2  rounded-lg box-content" />
            </span>
            <Menu
              menuButton={
                <MenuButton className="flex mr-2 items-center gap-x-2 bg-gray-800 p-2 rounded-lg">
                  <RiMore2Fill />
                </MenuButton>
              }
              menuClassName="bg-black"
              transition
            >
              <MenuItem className="">Cut</MenuItem>
              <MenuItem>Copy</MenuItem>
              <MenuItem>Paste</MenuItem>
            </Menu>
          </div>
          {/* numero  de card */}
          <div className="p-2">
            <h1 className="text-3xl font-bold">145,451</h1>
            <p>Tickets Totales</p>
            <hr className="border-sm border-gray-500/30 my-2" />
            <span className="flex gap-2 items-center text-sky-300">
              <RiAddLine />
              <button>Agregar nuevo ticket</button>
            </span>
          </div>
        </div>
        <div className="bg-sec-100 my-4 rounded-xl">
          <div className="flex items-center bg-sec-100 justify-between">
            <span className="">
              <RiTicketLine className="text-4xl bg-green-500/10 text-green-400 p-2  rounded-lg box-content" />
            </span>
            <Menu
              menuButton={
                <MenuButton className="flex mr-2 items-center gap-x-2 bg-gray-800 p-2 rounded-lg">
                  <RiMore2Fill />
                </MenuButton>
              }
              menuClassName="bg-black"
              transition
            >
              <MenuItem className="">Cut</MenuItem>
              <MenuItem>Copy</MenuItem>
              <MenuItem>Paste</MenuItem>
            </Menu>
          </div>
          {/* numero  de card */}
          <div className="p-2">
            <h1 className="text-3xl font-bold">145,451</h1>
            <p>Tickets Totales</p>
            <hr className="border-sm border-gray-500/30 my-2" />
            <span className="flex gap-2 items-center text-sky-300">
              <RiAddLine />
              <button>Agregar nuevo ticket</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
