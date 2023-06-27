import React, { useEffect, useState } from "react";
import SwiperServicies from "./SwiperServicies";

/* https://react-frontend.pages.dev/slides.json */
function Services() {
  const [servicies, setServicies] = useState([]);

  useEffect(() => {
    fetch("https://react-frontend.pages.dev/slides.json")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else throw resp;
      })
      .then((data) => setServicies(data));
  }, []);

  console.log(servicies);
  return (
    <div className="h-[722px] w-full">
      <div className="w-[80vw] h-full flex flex-row  items-center mx-auto">
        <div className="servicies-left w-[50%]">
          <h2 className="text-[#3A67CC] mb-[18px] text-[20px]  text-[Inter] font-bold leading-[135.523%] uppercase ">
            Servicios
          </h2>
          <h4 className="text-[#0F0F0F] mb-[18px] text-[36px] text-[Inter] font-semibold leading-[124.523%]">
            Esta info te llega desde un servicio externo
          </h4>
          <p className="text-[#2C2C2C] mb-[18px] text-[18px] text-[Inter] font-light leading-[142.523%]">
            Consultando el servicio en
            https://react-frontend.pages.dev/slides.json, debes usar Context
            para enviar los datos que necesitas en la sección de abajo. A la
            derecha tiene un slide o carrusel.
          </p>
          <button className="w-[175px] h-[49px] shrink-0 rounded-[56px] bg-[#2D509E] shadow-[4px_4px_22px_0_#709DDA]  text-[#FFF] text-center text-[24px] text-[Inter] font-semibold leading-[135.523%] tracking-[0.48px]">
            Ver más
          </button>
        </div>
        <div className="servicies-right w-[50%]">
          <SwiperServicies />
        </div>
      </div>
    </div>
  );
}

export default Services;
