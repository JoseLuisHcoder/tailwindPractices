const Login = () => {
  return (
    <div className="text-white bg-sec-100 p-8 rounded-xl">
      <h1 className="uppercase pb-8 text-center  text-3xl tracking-[5px] font-bold">
        Iniciar Sesion
      </h1>
      <form action="">
        <button className="w-full mb-8 items-center gap-4 bg-sec-900 flex justify-center rounded-full py-2 px-4">
          <img
            className="w-4 h-4"
            src="https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-Photo-Image.png"
            alt=""
          />
          <h3 className="text-[16px]"> Ingresa con Google</h3>
        </button>
        <div>
          <input
            type="text"
            className="py-2 w-full rounded-lg  outline-none px-4 bg-sec-900"
            name="email"
            id="email"
            placeholder="Correo electronico"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
