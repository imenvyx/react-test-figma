import React from "react";

//Images
import Language from "../../assets/images/languages/image-30-lang-english.png";
import HeroImg from "../../assets/images/hero-img.png";
import NumberBackground from "../../assets/images/clip-path-group.png";
function Hero() {
  return (
    <>
      <div className="absolute z-10 top-10 h-[86px] w-full ">
        <nav className="flex justify-between items-center flex-wrap max-w-[90vw] h-[86px] bg-[#FFF] m-[auto] rounded-lg shadow-[0_4px_35px_0_rgba(0, 0, 0, 0.39)]">
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
            <button className="w-[175px] h-[49px] shrink-0 rounded-[56px] bg-[#2D509E] shadow-[4px_4px_22px_0_#709DDA] text-[#FFF] text-center text-[20px] text-[Inter] font-semibold leading-[135.523%] tracking-[0.4px]">
              Contactar
            </button>
            <div className="w-27px h-18px">
              <img src={Language} alt="language" />
            </div>
          </div>
        </nav>
      </div>
      <div className="relative w-full h-[722px]   bg-[#001853] shadow-[0_4px_35px_0_rgba(0, 0, 0, 0.39);]">
        <img className="absolute right-20" src={NumberBackground} alt="" />
        <div className="flex flex-row  h-full">
          <div id="hero-left" className="w-[50%] flex items-center pl-[8%] ">
            <div className="flex flex-col lg:w-[80%] ">
              <h1 className="text-[#fff] text-[64px] font-extrabold leading-snug mb-[28px]">
                Es tiempo de maquetar
              </h1>
              <p className="text-[#fff] text-[20px] leading-[135.523%]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam accusamus accusantium eius, harum minima odit. Illo odio
                consequuntur laudantium reprehenderit ipsa corporis nesciunt
                repellat molestiae, recusandae dolorum, a ratione tenetur?
              </p>
            </div>
          </div>
          <div id="hero-right" className="flex w-[50%] relative">
            <img
              src={HeroImg}
              alt=""
              className="absolute -bottom-[15%] w-full"
            />
          </div>
        </div>
        <div className=" absolute -bottom-[40px] rounded-xl left-[20%] w-[122px] h-[122px] bg-[#001853] rotate-45"></div>
      </div>
    </>
  );
}

export default Hero;
