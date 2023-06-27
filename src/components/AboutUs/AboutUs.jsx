import React from "react";
import Img1 from "../../assets/images/collage/90.png";
import Img2 from "../../assets/images/collage/91.png";
import Img3 from "../../assets/images/collage/92.png";
import Img5 from "../../assets/images/collage/93.png";
import Img4 from "../../assets/images/collage/94.png";

import "./about-us.css";
function AboutUs() {
  return (
    <div className="h-[722px] w-full flex flex-grow">
      <div className="aboutUs-left w-[60%]">
        <div className="w-[553px] h-[545px]" id="img-canvas">
          <div className="relative">
            <div className="grid grid-cols-[repeat(auto-fill, minmax(100px, 1fr))] gap-4">
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
            <div className="absolute top-0 w-[198px] h-[346px] rounded-[10px] bg-[#2E53A3]"></div>
            <div className="absolute bottom-0 right-0 w-[198px] h-[346px] rounded-[10px] bg-[#2E53A3]"></div>
          </div>
        </div>
      </div>
      <div className="aboutUs-right w-[40%]">
        <h2 className="text-[#3A67CC] mb-[18px] text-[20px]  text-[Inter] font-bold leading-[135.523%] uppercase ">
          Servicios
        </h2>
        <h4 className="text-[#0F0F0F] mb-[18px] text-[36px] text-[Inter] font-semibold leading-[124.523%]">
          Esta info te llega desde un servicio externo
        </h4>
        <p className="text-[#2C2C2C] mb-[18px] text-[18px] text-[Inter] font-light leading-[142.523%]">
          Consultando el servicio en
          https://react-frontend.pages.dev/slides.json, debes usar Context para
          enviar los datos que necesitas en la sección de abajo. A la derecha
          tiene un slide o carrusel.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
