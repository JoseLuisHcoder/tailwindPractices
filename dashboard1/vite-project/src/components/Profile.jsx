import {
  RiEdit2Line,
  RiGithubFill,
  RiGoogleFill,
  RiShieldCheckLine,
  RiSlackLine,
} from "react-icons/ri";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const Profile = () => {
  const [switchButton, setSwitchButton] = useState(false);
  return (
    <>
      {/* Tarjeta de Perfil */}
      <div className="bg-sec-100 p-8 mb-6 rounded-xl">
        <div>
          <h1 className="text-xl text-gray-100 ">Profile Details</h1>
          <hr className="my-8 border-gray-500" />
        </div>
        <form action="" className="flex flex-col">
          <div className="flex">
            <div className=" w-1/4 flex items-center">Avatar</div>
            <div className=" flex-1">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-joven-alegre_171337-6084.jpg"
                  alt=""
                  className="w-28 h-28 rounded-lg object-cover"
                />
                <label
                  htmlFor="avatar"
                  className="p-2 bg-sec-100 absolute -top-3 left-24 rounded-full hover:cursor-pointer"
                >
                  <RiEdit2Line />
                </label>
                <input type="file" id="avatar" className="hidden" />
                <p className="text-gray-500 text-sm">
                  Allowed types: png , jpg, jpge
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-6">
            <div className=" w-1/4 flex items-center">
              Nombre completo <span className="text-red-400">*</span>
            </div>
            <div className=" flex-1 ">
              <div className="flex-1 flex items-center gap-4">
                <div className="w-full ">
                  <input
                    type="text"
                    id="avatar"
                    className="w-full py-2 px-4 outline-none rounded-lg bg-sec-900"
                    placeholder="Npmbre(s)"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    id="avatar"
                    className="w-full py-2 px-4 outline-none rounded-lg bg-sec-900"
                    placeholder="Apellido(s)"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-6">
            <div className=" w-1/4 flex items-center">
              Empresa <span className="text-red-400">*</span>
            </div>
            <div className=" flex-1 ">
              <div className="flex-1 flex items-center ">
                <div className="w-full ">
                  <input
                    type="text"
                    id="avatar"
                    className="w-full py-2 px-4 outline-none rounded-lg bg-sec-900"
                    placeholder="Npmbre de la empresa"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-6">
            <div className=" w-1/4 flex items-center">
              Numero de contacto <span className="text-red-400">*</span>
            </div>
            <div className=" flex-1 ">
              <div className="flex-1 flex items-center ">
                <div className="w-full ">
                  <input
                    type="text"
                    id="avatar"
                    className="w-full py-2 px-4 outline-none rounded-lg bg-sec-900"
                    placeholder="Npmbre de telefono"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-6">
            <div className=" w-1/4 flex items-center">
              Pagina web <span className="text-red-400">*</span>
            </div>
            <div className=" flex-1 ">
              <div className="flex-1 flex items-center ">
                <div className="w-full ">
                  <input
                    type="text"
                    id="avatar"
                    className="w-full py-2 px-4 outline-none rounded-lg bg-sec-900"
                    placeholder="Npmbre de la pagina web"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-6">
            <div className=" w-1/4 flex items-center">
              Pais <span className="text-red-400">*</span>
            </div>
            <div className=" ">
              <select
                name=""
                id=""
                className="w-full py-2 px-4 outline-none rounded-lg bg-sec-900 appearance-none"
              >
                <option value="" selected></option>
                <option value="arg">Argentina</option>
                <option value="col">Colombia</option>
                <option value="bol">Bolivia</option>
                <option value="mex">Mexico</option>
              </select>
            </div>
          </div>
        </form>
        <hr className="mt-8 border-gray-500/30" />
        <div className="flex justify-end pt-4">
          <button className="bg-pri/70 text-white py-2 px-4 rounded-lg hover:bg-pri transition-colors ">
            Guardar
          </button>
        </div>
      </div>
      {/* Cambio de password */}
      <div className="bg-sec-100 p-8 rounded-xl mb-6">
        <div>
          <h1 className="text-xl text-gray-100 ">Usuario y contraseña</h1>
          <hr className="my-8 border-gray-500/30" />
        </div>
        <form action="" className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-text-gray-100 text-xl mb-1">
                Correo electronico
              </h5>
              <p className="text-gray-500 text-sm">jljl@gmail.com</p>
            </div>
            <div>
              <button className="bg-sec-900/50 py-3 px-4 rounded-lg hover:bg-sec-900 hover:text-gray-500 transition-colors">
                Cambiar email
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-text-gray-100 text-xl mb-1">Contraseña</h5>
              <p className="text-gray-500 text-sm">**********</p>
            </div>
            <div className="">
              <button className="bg-sec-900/50 py-3 px-4 rounded-lg hover:bg-sec-900 hover:text-gray-500 transition-colors">
                Cambiar password
              </button>
            </div>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-8 itemsd-center bg-green-500/10 p-4 rounded-lg border border-green-600">
          <div className="justify-center items-center flex">
            <RiShieldCheckLine className="text-5xl text-green-600" />
          </div>
          <div className="md:col-span-6">
            <h5 className="text-gray-100 text-xl">Asegura tu contraseña</h5>
            <p className="text-gray-500">
              Two factor authentication adds an extra layer of security to your
              account. To log in, in addition you´ll need provide a 6 digit code
            </p>
          </div>
          <div className="items-center flex">
            <button className="bg-green-600/70 hover:bg-green-600 transition-colors py-2 px-4 rounded-lg text-gray-100">
              Activar
            </button>
          </div>
        </div>
      </div>
      {/* Conectar cuentas */}
      <div className="bg-sec-100 p-8 rounded-xl mb-6">
        <div>
          <h1 className="text-xl text-gray-100 ">Conectar con tus cuentas</h1>
          <hr className="my-8 border-gray-500/30" />
        </div>
        <div className="flex-1 flex gap-4 items-center bg-green-500/10 p-4 rounded-lg border border-green-600 mb-8">
          <div className="justify-center items-center flex">
            <RiShieldCheckLine className="text-5xl text-green-600" />
          </div>
          <div className="">
            <p className="text-gray-500">
              Two factor authentication adds an extra layer of security to your
              account. To log in, in addition you´ll need provide a 6 digit code
            </p>
          </div>
        </div>
        <form action="" className="mb-6">
          <div className="flex items-center gap-4 ">
            <div>
              <RiGoogleFill className="text-4xl" />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div className="">
                <h5 className="text-text-gray-100 text-xl mb-1">Google</h5>
                <p className="text-gray-500 text-sm">connecto acoount</p>
              </div>
              <div>
                <Switch
                  checked={switchButton}
                  onChange={setSwitchButton}
                  className={`${
                    switchButton ? "bg-blue-600" : "bg-gray-600"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Google</span>
                  <span
                    className={`${
                      switchButton ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center gap-4 ">
            <div>
              <RiGithubFill className="text-4xl" />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div className="">
                <h5 className="text-text-gray-100 text-xl mb-1">Github</h5>
                <p className="text-gray-500 text-sm">connecto acoount</p>
              </div>
              <div>
                <Switch
                  checked={switchButton}
                  onChange={setSwitchButton}
                  className={`${
                    switchButton ? "bg-blue-600" : "bg-gray-600"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Google</span>
                  <span
                    className={`${
                      switchButton ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center gap-4 ">
            <div>
              <RiSlackLine className="text-4xl" />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div className="">
                <h5 className="text-text-gray-100 text-xl mb-1">Slack</h5>
                <p className="text-gray-500 text-sm">connecto acoount</p>
              </div>
              <div>
                <Switch
                  checked={switchButton}
                  onChange={setSwitchButton}
                  className={`${
                    switchButton ? "bg-blue-600" : "bg-gray-600"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Google</span>
                  <span
                    className={`${
                      switchButton ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* checkbox */}
      <div className="bg-sec-100 p-8 rounded-xl mb-6">
        <div>
          <h1 className="text-xl text-gray-100 ">Pagos</h1>
          <hr className="my-8 border-gray-500/30" />
        </div>

        <div action="" className="mb-6">
          <div className="flex items-center gap-4 ">
            <div>
              <input id="id1" type="checkbox" className="bg-prim accent-pri" />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div className="">
                <label
                  htmlFor="id1"
                  className="text-text-gray-100 text-xl mb-1"
                >
                  Pagos exitosos
                </label>
                <p className="text-gray-500 text-sm">
                  Recibe un anotificaion para cada pago realizado
                </p>
              </div>
            </div>
          </div>
          <hr
            className="my-8 border-gray-500/30 
          border-dashed"
          />
          <div className="flex items-center gap-4 ">
            <div>
              <input id="id2" type="checkbox" className="bg-prim accent-pri " />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div className="">
                <label
                  htmlFor="id2"
                  className="text-text-gray-100 text-xl mb-1"
                >
                  Pagos exitosos
                </label>
                <p className="text-gray-500 text-sm">
                  Recibe un anotificaion para cada pago realizado
                </p>
              </div>
            </div>
          </div>
          <hr
            className="my-8 border-gray-500/30 
          border-dashed"
          />
          <div className="flex items-center gap-4 ">
            <div>
              <input id="id3" type="checkbox" className="bg-prim accent-pri " />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div className="">
                <label
                  htmlFor="id3"
                  className="text-text-gray-100 text-xl mb-1"
                >
                  Pagos exitosos
                </label>
                <p className="text-gray-500 text-sm">
                  Recibe un anotificaion para cada pago realizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desactivar cuenta */}
      <div className="bg-sec-100 p-8 rounded-xl mb-6">
        <div>
          <h1 className="text-xl text-gray-100 ">Desactivar tu cuenta</h1>
          <hr className="my-8 border-gray-500/30" />
        </div>
        <div className="flex-1 flex gap-4 items-center bg-orange-500/10 p-4 rounded-lg border border-orange-600 mb-2">
          <div className="justify-center items-center flex">
            <RiShieldCheckLine className="text-5xl text-orange-600" />
          </div>
          <div className="">
            <p className="text-gray-500">
              Two factor authentication adds an extra layer of security to your
              account. To log in, in addition you´ll need provide a 6 digit code
            </p>
          </div>
        </div>
        <form action="" className="mb-6">
          <input id="idDelete" type="checkbox" />
          <label className="px-4" htmlFor="idDelete">
            Desactivar tu cuenta
          </label>
        </form>
        <hr className=" border-gray-500/30 border-dashed" />
        <div className=" justify-end flex">
          <button className="bg-red-600/50 py-3 px-4 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
            Desactivar cuenta
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
