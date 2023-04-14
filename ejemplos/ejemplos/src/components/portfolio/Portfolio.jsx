import viteLogo from "../../../public/vite.svg";
import "../../index.css";
import {
  RiMoonClearFill,
  RiMenu2Line,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Portfolio = () => {
  return (
    <div className="App bg-sec pb-16 text-pri ">
      <header>
        <nav className="flex py-10  m-auto pl-10 text-lg font-medium tracking-widest md:items-center justify-between">
          <div>
            <a href="">
              <img src="./vite.svg" alt="" />
            </a>
          </div>
          <div
            className="flex items-start flex-col  justify-around rounded-md p-7 h-[380px] bg-white w-[320px] md:flex-row md:w-full md:h-[50px] md:bg-inherit "
            id="menu"
          >
            <ul className="flex md:space-x-8 w-full right-0 flex-col h-5/6 justify-around md:flex-row md:justify-center">
              <li>
                <a href="" className="hover:text-orange-700">
                  Quien soy
                </a>
              </li>
              <li>
                <a href="" className="hover:text-orange-700">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="" className="hover:text-orange-700">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="" className="hover:text-orange-700">
                  Contactame
                </a>
              </li>
            </ul>
            <button id="darkButton" className="md:mr-6">
              <RiMoonClearFill />
            </button>
          </div>
          <button id="menuh" className=" absolute top-16 right-6 md:hidden ">
            <RiMenu2Line />
          </button>
        </nav>
      </header>
      <section className="my-0 flex flex-col md:flex-row md:h-[850px]">
        <div className="p-10 md:w-[80%]  md:h-[500px] md-self-center ">
          <h1 className="font-extrabold text-2xl">Hola Soy Jose Luis</h1>
          <p className="py-2 text-xl font-bold">Buscando un mejor furturo</p>
          <p className="text-xl">
            Desarrollo de Aplicaciones web profesionales
          </p>
          <p className="text-xl">
            Soy un ingeniero de software que se especializa en diseñar y
            desarrollar aplicaicones web profesionales
          </p>
          <div className=" flex  py-4">
            <a href="" className="pr-4 px-2 text-2xl hover:text-tre">
              <RiLinkedinBoxFill />
            </a>
            <a href="" className="pr-4 px-2 text-2xl hover:text-tre">
              <RiGithubFill />
            </a>
            <a href="" className="pr-4 px-2 text-2xl hover:text-tre">
              <RiYoutubeFill />
            </a>
          </div>
          <div className="flex justify-center my-4">
            <button className="border-2 rounded border-tre p-3 w-[250px] text-lg font-bold hover:bg-pri hover:text-sec">
              Contratame
            </button>
          </div>
        </div>
        <div className="my-6 w-full">
          <div className="w-[300px] h-[320px] md:bg-[length:640px_720px]  m-auto bg-[url('https://cdn.shopify.com/s/files/1/1843/8169/products/thumb_3cb276f0-150d-4cb5-bb2a-244f634652c3_600x.jpg?v=1654327583')] bg-cover rounded-lg md:w-[100%] md:h-[100%] md:bg-center md:bg-no-repeat "></div>
        </div>
      </section>
      <h2 className="text-3xl font-bold tracking-widest w-[80%] m-auto text-center pt-8">
        Experiencia Laboral
      </h2>
      <section
        className="my-12 flex flex-col w-[80%] m-auto md:flex-row md:w-[85%] md:my-28"
        id="jobSection"
      >
        <div className="flex justify-between md:flex-col md:w-[20%] ">
          <button
            type="button"
            id="link1"
            data-id="job1"
            className="border-b-4 w-full px-4 py-1
           hover:bg-white hover:border-tre md:border-l-4 md:border-b-0
            md:h-full md:text-left border-tre bg-white"
          >
            IntelIo
          </button>
          <button
            type="button"
            data-id="job2"
            className="border-b-4 w-full px-4 py-1
         hover:bg-white hover:border-tre md:border-l-4 md:border-b-0
          md:h-full md:text-left "
          >
            ExpertD
          </button>
          <button
            type="button"
            data-id="job3"
            className="border-b-4 w-full px-4 py-1
         hover:bg-white hover:border-tre md:border-l-4 md:border-b-0
          md:h-full md:text-left "
          >
            ArtWeb
          </button>
          <button
            type="button"
            data-id="job4"
            className="border-b-4 w-full px-4 py-1
         hover:bg-white hover:border-tre md:border-l-4 md:border-b-0
          md:h-full md:text-left "
          >
            CreativeTech
          </button>
        </div>
        <div className="my-5 md:px-10 md:my-0 md:max-w-[800px] ">
          <article id="job1">
            <h3>Ingeniero de Software</h3>
            <span className="font-bold text-for">@IntelIo</span>
            <h4 className="text-sm pb-5">Junio 2022</h4>
            <ul>
              <li className="flex items-center py-2">
                <span className="pr-2 text-tre font-bold">&#9655;</span>
                <p className="text-stone-900 px-5 font-normal">
                  He desarrollado aplicaciones modernas, eficientes y facil de
                  mantener tanto para clientes internos como para clientes
                  externos.
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-tre font-bold">&#9655;</span>
                <p className="text-stone-900 px-5 font-normal">
                  He trabajado con varias tecnologias WEB modernas incluyendo
                  React, TypesScript, Express JS y PostgreSQL
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-tre font-bold">&#9655;</span>
                <p className="text-stone-900 px-5 font-normal">
                  He brindado apoyo tecnico para nuestros clientes durante el
                  lanzamiento de plataformas digitales
                </p>
              </li>
            </ul>
          </article>

          {/* SECIONES OCULTAS */}

          <article id="job2" className="hidden">
            <h3>Ingeniero Frontend</h3>
            <span className="font-bold text-for">@ExpertD</span>
            <h4 className="text-sm pb-5">Junio 2021</h4>
            <ul>
              <li className="flex items-center py-2">
                <span className="pr-2 text-tre font-bold">&#9655;</span>
                <p className="text-stone-900 px-5 font-normal">
                  He desarrollado aplicaciones modernas, eficientes y facil de
                  mantener tanto para clientes internos como para clientes
                  externos.
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-tre font-bold">&#9655;</span>
                <p className="text-stone-900 px-5 font-normal">
                  He trabajado con varias tecnologias WEB modernas incluyendo
                  React, TypesScript, Express JS y PostgreSQL
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-tre font-bold">&#9655;</span>
                <p className="text-stone-900 px-5 font-normal">
                  He brindado apoyo tecnico para nuestros clientes durante el
                  lanzamiento de plataformas digitales
                </p>
              </li>
            </ul>
          </article>

          <article id="job3" className="hidden">
            <h3>Ingeniero Backend</h3>
            <span className="font-bold text-for">@ArtWeb</span>
            <h4 className="text-sm pb-5">Junio 2021</h4>
            <ul>
              <li className="flex items-center py-2">
                <span className="pr-2 text-tre font-bold">&#9655;</span>
                <p className="text-stone-900 px-5 font-normal">
                  He desarrollado aplicaciones modernas, eficientes y facil de
                  mantener tanto para clientes internos como para clientes
                  externos.
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-tre font-bold">&#9655;</span>
                <p className="text-stone-900 px-5 font-normal">
                  He trabajado con varias tecnologias WEB modernas incluyendo
                  React, TypesScript, Express JS y PostgreSQL
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-tre font-bold">&#9655;</span>
                <p className="text-stone-900 px-5 font-normal">
                  He brindado apoyo tecnico para nuestros clientes durante el
                  lanzamiento de plataformas digitales
                </p>
              </li>
            </ul>
          </article>

          <article id="job3" className="hidden">
            <h3>Ingeniero Full Stack</h3>
            <span className="font-bold text-for">@Creative Tech</span>
            <h4 className="text-sm pb-5">Junio 2021</h4>
            <ul>
              <li className="flex items-center py-2">
                <span className="pr-2 text-tre font-bold">&#9655;</span>
                <p className="text-stone-900 px-5 font-normal">
                  He desarrollado aplicaciones modernas, eficientes y facil de
                  mantener tanto para clientes internos como para clientes
                  externos.
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-tre font-bold">&#9655;</span>
                <p className="text-stone-900 px-5 font-normal">
                  He trabajado con varias tecnologias WEB modernas incluyendo
                  React, TypesScript, Express JS y PostgreSQL
                </p>
              </li>
              <li className="flex items-center py-2">
                <span className="pr-2 text-tre font-bold">&#9655;</span>
                <p className="text-stone-900 px-5 font-normal">
                  He brindado apoyo tecnico para nuestros clientes durante el
                  lanzamiento de plataformas digitales
                </p>
              </li>
            </ul>
          </article>
          {/* FIN SE SECCIONES OCULTAS */}
        </div>
      </section>

      {/* SECCION DE PROYECTOS */}

      <h2 className="text-3xl font-bold tracking-widest w-[80%] m-auto text-center pt-8">
        Mis Ultimos Proyectos
      </h2>

      <section className="my-12 flex flex-col items-center justify-center w-[90%] m-auto md:flex-row ">
        {/* PRIMER PROYECTO */}
        <div className="border-2 rounded-lg max-w-[450px]  bg-white m-5 ">
          <div className="m-2  ">
            <img
              className="opacity-80  hover:opacity-100"
              src="https://www.yeeply.com/wp-content/uploads/2017/03/Web-corporativa-yeeply-1.jpg"
              alt=""
            />
            <h4 className="font-bold my-2">IntelIo - Renta Oficinas</h4>
            <article className="flex justify-between">
              <div className="flex flex-nowrap items-center">
                <span className="bg-slate-200 rounded-lg px-2 mr-2 slate-700 ">
                  HTML
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 slate-700 ">
                  CSS
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 slate-700 ">
                  JS
                </span>
              </div>
              <div className="flex space-x-2 mr-2">
                <a href="">
                  <RiLinkedinBoxFill className="text-2xl" />
                </a>
                <a href="">
                  <RiGithubFill className="text-2xl" />
                </a>
              </div>
            </article>
          </div>
        </div>

        {/* SEGUNDO PROYECTO */}

        <div className="border-2 rounded-lg max-w-[450px]  bg-white m-5 ">
          <div className="m-2 ">
            <img
              className="opacity-80  hover:opacity-100"
              src="https://www.masisoft.it/immagini/thumb/xlarge/realizzazione-posizionamento-seo-siti-web.jpg"
              alt=""
            />
            <h4 className="font-bold my-2">IntelIo - Renta Oficinas</h4>
            <article className="flex justify-between">
              <div className="flex flex-nowrap items-center">
                <span className="bg-slate-200 rounded-lg px-2 mr-2 slate-700 ">
                  HTML
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 slate-700 ">
                  CSS
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 slate-700 ">
                  JS
                </span>
              </div>
              <div className="flex space-x-2 mr-2">
                <a href="">
                  <RiLinkedinBoxFill className="text-2xl" />
                </a>
                <a href="">
                  <RiGithubFill className="text-2xl" />
                </a>
              </div>
            </article>
          </div>
        </div>
        {/* TERCER PROYECTO */}

        <div className="border-2 rounded-lg max-w-[450px] bg-white m-5 ">
          <div className="m-2 ">
            <img
              className="opacity-80  hover:opacity-100"
              src="https://somospecesvoladores.com/wp-content/uploads/2020/03/design-services-1.png"
              alt=""
            />
            <h4 className="font-bold my-2">IntelIo - Renta Oficinas</h4>
            <article className="flex justify-between">
              <div className="flex flex-nowrap items-center">
                <span className="bg-slate-200 rounded-lg px-2 mr-2 slate-700 ">
                  HTML
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 slate-700 ">
                  CSS
                </span>
                <span className="bg-slate-200 rounded-lg px-2 mr-2 slate-700 ">
                  JS
                </span>
              </div>
              <div className="flex space-x-2 mr-2">
                <a href="">
                  <RiLinkedinBoxFill className="text-2xl" />
                </a>
                <a href="">
                  <RiGithubFill className="text-2xl" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO */}

      <h2 className="text-3xl font-bold tracking-widest w-[80%] m-auto text-center pt-8">
        Contactame
      </h2>
      <section className="flex flex-col m-auto w-[90%]">
        <form
          action=""
          className="w-[90%] flex flex-col m-auto md:max-w-[600px]"
        >
          <div className="py-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ingrese su email"
              className="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-for "
            />
          </div>
          <div className="">
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Ingrese su Nombre"
              className="p-3 w-full rounded-lg  focus:outline-none focus:ring focus:ring-for "
            />
          </div>
          <div className="mt-3">
            <textarea
              type="text"
              name="msj"
              id="msj"
              placeholder="Ingrese su mensaje"
              className="p-3 w-full rounded-lg  focus:outline-none focus:ring focus:ring-for "
              rows="5"
            ></textarea>
          </div>
          <div>
            <button className="bg-for rounded-lg w-full text-lg tracking-widest mt-2 p-2 font-bold text-white">
              Enviar mensaje
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;
