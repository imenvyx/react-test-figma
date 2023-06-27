import React from "react";

//Images
import Language from "../../assets/images/languages/image-30-lang-english.png";
function Hero() {
  return (
    <div className=" w-full h-[722px] bg-[#001853] shadow-[0_4px_35px_0_rgba(0, 0, 0, 0.39);]">
      <div className="h-[86px] w-full pt-[45px] ">
        <nav className="flex justify-between items-center flex-wrap max-w-[1401px] h-[86px] bg-[#FFF] m-[auto] rounded-lg shadow-[0_4px_35px_0_rgba(0, 0, 0, 0.39)] ">
          <div className="w-[60%]">
            <ul className="flex flex-row justify-around  content-center uppercase ">
              <li>Inicio</li>
              <li>Servicios</li>
              <li>Nosotros</li>
              <li>Herramientas</li>
              <li>Socios</li>
            </ul>
          </div>
          <div className="flex flex-row gap-[20px]   items-center w-[20%]">
            <button className="w-[175px] h-[49px] shrink-0 rounded-[56px] bg-[#2D509E] shadow-[4px_4px_22px_0_#709DDA]">
              Contactar
            </button>
            <div className="w-27px h-18px">
              <img src={Language} alt="language" />
            </div>
          </div>
        </nav>
      </div>
      <div id="hero-left"></div>
      <div id="hero-right"></div>
    </div>
  );
}

export default Hero;
