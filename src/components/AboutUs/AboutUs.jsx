import React from "react";
import Img1 from "../../assets/images/collage/90.png";
import Img2 from "../../assets/images/collage/91.png";
import Img3 from "../../assets/images/collage/92.png";
import Img5 from "../../assets/images/collage/93.png";
import Img4 from "../../assets/images/collage/94.png";

import "./about-us.css";
function AboutUs() {
  return (
    <div className="h-[722px] flex flex-row justify-center items-center w-[80vw] mx-auto">
      <div className="aboutUs-left w-[55%]  flex ">
        <div className="w-[553px] h-[545px]" id="img-canvas">
          <div className="relative">
            <div className="relative grid grid-cols-[repeat(auto-fill, minmax(100px, 1fr))] gap-4 z-20">
              <div id="image-collage" className="col-end-2  row-[1/3]">
                <img src={Img1} alt="" className="" />
              </div>
              <div id="image-collage" className="col-start-2 col-span-2  ">
                <img src={Img2} alt="" />
              </div>
              <div id="image-collage" className="col-start-2 row-[2/2] ">
                <img src={Img3} alt="" />
              </div>
              <div id="image-collage" className="col-start-3 row-[2/4]">
                <img src={Img4} alt="" />
              </div>
              <div id="image-collage" className="col-[1/3]">
                <img src={Img5} alt="" />
              </div>
            </div>
            <div className="absolute -top-[24px] -left-[24px] w-[198px] h-[346px] rounded-[10px] bg-[#2E53A3]"></div>
            <div className="absolute -bottom-[24px] -right-[24px] w-[198px] h-[346px] rounded-[10px] bg-[#2E53A3]"></div>
          </div>
        </div>
      </div>
      <div className="aboutUs-right w-[40%] text-right pl-[5%]">
        <h2 className="text-[#3A67CC] mb-[18px] text-[20px]  text-[Inter] font-bold leading-[135.523%] uppercase ">
          Sobre nosotros
        </h2>
        <h4 className="text-[#0F0F0F] mb-[18px] text-[36px] text-[Inter] font-semibold leading-[124.523%]">
          Traduce solo este título maravilloso y el navbar
        </h4>
        <p className="text-[#2C2C2C] mb-[18px] text-[18px] text-[Inter] font-light leading-[142.523%]">
          Usted debe tener un sólido conocimiento de HTML y CSS. Debe comprender
          la arquitectura de componentes de React. Debe tener buena atención al
          detalle, organización del código, habilidades de comunicación efectiva
          y capacidad para trabajar en equipo.
        </p>
        <h4 className="text-[#606060] mb-[18px] text-right text-[22px] text-[Inter] font-bold leading-[124.523%]">
          Usa Context para acceder a los títulos de abajo desde la sección
          anterior
        </h4>
        <p className="inline-flex flex-row items-center text-[#606060] text-right text-[16px] text-[Inter] font-medium leading-[124.523%]">
          Pruebas y depuración de problemas{" "}
          <span className=" ml-8 w-[20px] h-[20px] text-center  leading-[20px] text-[22px]   text-[#007aff]  opacity-1 bg-[#fff] rounded-full border-2 border-[#3D93FF]">
            •
          </span>
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
