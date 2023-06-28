import React from "react";
import IconMobile from "../../assets/images/Mobile";
/* import IconDataConfig from "../../assets/images/data-cc.svg";
import IconConfig from "../../assets/images/config.svg"; */

/* function iconVariant(variant) {
  if (variant === "mobile") return IconMobile;
  else if (variant === "data_cc") return IconDataConfig;
  else return IconConfig;
} */

function ServiceCard() {
  /* shadow-[0_0_14px_0_rgba(11,27,0,0.10)] */
  return (
    <div className="flex flex-col justify-center px-6 w-[286px] h-[366px] bg-[#fff] shadow-[0_0_14px_0_rgba(11,27,0,0.10)]">
      {/* Icon */}
      <IconMobile
        className="mb-[18px]"
        width={" 101.03px"}
        height={" 100.752px"}
        fill="#2E53A3"
      />
      {/* Title */}
      <h4 className="text-[#0F0F0F] mb-[18px] text-[22px] text-[Inter] font-semibold leading-[124.523%]">
        Pruebas y depuración de problemas
      </h4>
      {/* Text */}
      <p className="text-[#B7B7B7] text-[14px] text-[Inter]  leading-[124.523%]">
        Debes ser capaz de identificar y solucionar problemas de visualización,
        problemas de compatibilidad, etc. Este card está en versión hover.
      </p>
      {/* Leer Mas cuando esta activo */}
    </div>
  );
}

export default ServiceCard;
