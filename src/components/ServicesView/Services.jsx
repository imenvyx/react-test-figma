
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
      <div className="w-[90vw] flex flex-row mx-auto">
        <div className="servicies-left w-[50%]">
          <h2>Servicios</h2>
          <h4>Esta info te llega desde un servicio externo</h4>
          <p>
            Consultando el servicio en
            https://react-frontend.pages.dev/slides.json, debes usar Context
            para enviar los datos que necesitas en la sección de abajo. A la
            derecha tiene un slide o carrusel.
          </p>
          <button className="w-[175px] h-[49px] shrink-0 rounded-[56px] bg-[#2D509E] shadow-[4px_4px_22px_0_#709DDA]">
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
