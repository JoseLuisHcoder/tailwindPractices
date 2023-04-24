import React from "react";
import Cards from "./Cards";

const Maquetacion = () => {
  return (
    <div className="container mx-auto mt-5">
      <div>
        <h1 className="w-full text-3xl font-bold text-center pb-5">Tailwind</h1>
        <h3 className="text-2xl text-center font-medium">Flexbox</h3>
        <div className="flex -mx-2 justify-center flex-wrap">
          <div className="w-full px-2 sm:w-1/2 md:w-1/3">
            <Cards photo="https://picsum.photos/800/600" />
          </div>
          <div className="w-full px-2 sm:w-1/2 md:w-1/3">
            <Cards photo="https://picsum.photos/800/600" />
          </div>
          <div className="w-full px-2 sm:w-1/2 md:w-1/3">
            <Cards photo="https://picsum.photos/800/600" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap  bg-sky-300">
        <div className="bg-orange-500 px-4 w-full sm:w-1/2 md:w-1/3 p-4  text-center">
          <div className="px-4 bg-green-500">1</div>
        </div>
        <div className="bg-orange-500 px-4 w-full sm:w-1/2 md:w-1/3 p-4  text-center">
          <div className="px-4 bg-green-500">2</div>
        </div>
        <div className="bg-orange-500 px-4 w-full sm:w-1/2 md:w-1/3 p-4  text-center">
          <div className="px-4 bg-green-500">3</div>
        </div>
      </div>
      <h2 className="pt-10 font-bold text-4xl text-center">GRID</h2>
      {/*    GRID */}

      <div className=" my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-sky-300 px-4 w-full  p-4  text-center">
          <div className="px-4 bg-green-500">1</div>
        </div>
        <div className="bg-sky-300 px-4 w-full p-4 text-center">
          <div className="px-4 bg-green-500">2</div>
        </div>
        <div className="bg-sky-300 px-4 w-full  p-4  text-center">
          <div className="px-4 bg-green-500">3</div>
        </div>
        <div className="bg-sky-300 px-4 w-full  p-4  text-center">
          <div className="px-4 bg-green-500">4</div>
        </div>
        <div className="bg-sky-300 px-4 w-full  p-4  text-center">
          <div className="px-4 bg-green-500">5</div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}

      <div className=" my-10 grid grid-cols-6  gap-4">
        <div className="bg-orange-700 col-span-4 px-4 w-full  p-4  text-center">
          <div className="px-4  bg-green-500">1</div>
        </div>
        <div className="bg-orange-700 col-span-2 px-4 w-full p-4 text-center">
          <div className="px-4 bg-green-500">2</div>
        </div>
        <div className="bg-orange-700 col-span-3 px-4 w-full  p-4  text-center">
          <div className="px-4 bg-green-500">3</div>
        </div>
        <div className="bg-orange-700 col-span-3 px-4 w-full  p-4  text-center">
          <div className="px-4 bg-green-500">4</div>
        </div>
        <div className="bg-orange-700 col-span-6 px-4 w-full  p-4  text-center">
          <div className="px-4 bg-green-500">5</div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}

      <div className=" my-10 grid grid-cols-6  gap-4">
        <div className="bg-black  col-auto px-4 w-full  p-4  text-center">
          <div className="px-4  bg-green-500">1</div>
        </div>
        <div className="bg-black col-start-4 px-4 w-full p-4 text-center">
          <div className="px-4 bg-green-500">2</div>
        </div>
        <div className="bg-black  px-4 w-full  p-4  text-center">
          <div className="px-4 bg-green-500">3</div>
        </div>
        <div className="bg-black  px-4 col-end-4 w-full  p-4  text-center">
          <div className="px-4 bg-green-500">4</div>
        </div>
        <div className="bg-black  px-4 w-full  p-4  text-center">
          <div className="px-4 bg-green-500">5</div>
        </div>
        <div className="bg-black  px-4 w-full  p-4  text-center">
          <div className="px-4 bg-green-500">6</div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}

      <div className="grid grid-cols-6 py-10 gap-2">
        <div className="bg-orange-600 col-span-1  text-center">1</div>
        <div className="bg-slate-200 h-full col-span-5 text-center">
          <div className="bg-sky-200 py-2">3</div>
          <div className="bg-sky-400 py-2">4</div>
          <div className="grid grid-cols-5  grid-rows-4">
            <div className=" bg-green-100 col-span-5 h-1/2 row-span-2">
              <div className=" bg-slate-600 grid grid-rows-1 grid-cols-2">
                7
              </div>
              <div className="bg-orange-400 grid grid-rows-1 grid-cols-3">
                8
              </div>
            </div>
            <div className="col-span-5 row-span-2 bg-green-400">6</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maquetacion;
