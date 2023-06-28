import React from "react";
import IconMobile from "../../assets/images/Mobile";
import IconDataCC from "../../assets/images/DataCC";
import IconConfig from "../../assets/images/Config";

function IconVariant({ variant }) {
  console.log(variant);
  if (variant === "mobile")
    return (
      <IconMobile
        className="mb-[18px]"
        width={" 101.03px"}
        height={" 100.752px"}
        fill="#2E53A3"
      />
    );
  else if (variant === "data_config")
    return (
      <IconDataCC
        className="mb-[18px]"
        width={" 101.03px"}
        height={" 100.752px"}
        fill="#2E53A3"
      />
    );
  else
    return (
      <IconConfig
        className="mb-[18px]"
        width={" 101.03px"}
        height={" 100.752px"}
        fill="#2E53A3"
      />
    );
}

function ServiceCard({ service }) {
  const { icon, title, description, link } = service;

  return (
    <div className="flex flex-col justify-center px-6 w-[286px] h-[366px] bg-[#fff] shadow-[0_0_14px_0_rgba(11,27,0,0.10)]">
      <IconVariant variant={icon} />
      <h4 className="text-[#0F0F0F] mb-[18px] text-[22px] text-[Inter] font-semibold leading-[124.523%]">
        {title}
      </h4>

      <p className="text-[#B7B7B7] text-[14px] text-[Inter]  leading-[124.523%]">
        {description}
      </p>
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          Ver Más
        </a>
      </div>
      {/* Leer Mas cuando esta activo */}
    </div>
  );
}

export default ServiceCard;
