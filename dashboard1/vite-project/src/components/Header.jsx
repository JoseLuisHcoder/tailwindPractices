import { RiArrowDownSLine, RiNotification3Line } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Header = () => {
  return (
    <header className="bg-sec-900 border-b border-gray-600  h-[10vh] flex items-center justify-end">
      <nav className="flex items-center gap-x-4">
        <button className="relative">
          <RiNotification3Line className=" z-10" />
          <span className="absolute -top-2.5 -right-1 bg-pri py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold  ">
            2
          </span>
        </button>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 bg-gray-800 p-2 rounded-lg">
              <img
                className="w-6 h-6 rounded-full object-cover"
                src="https://img.freepik.com/foto-gratis/imagen-modelo-morena-segura-si-misma-chica-ve-asertiva-lista-cruza-brazos-sobre-pecho-como-cara-presumida-profesional-sonriente-pie-sobre-fondo-blanco_176420-47089.jpg?w=740&t=st=1682190058~exp=1682190658~hmac=7290eff5da6f5c752f799009468f82211d7c2bd3c4ca298f1b97dcac18459fc7"
                alt=""
              />
              <span>Sofia HHH</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          menuClassName="bg-red-400"
          transition
        >
          <MenuItem className="bg-black">Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
