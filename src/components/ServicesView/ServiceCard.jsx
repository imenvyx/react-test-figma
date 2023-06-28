import React, { useState } from "react";
import IconMobile from "../../assets/images/Mobile";
import IconDataCC from "../../assets/images/DataCC";
import IconConfig from "../../assets/images/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function IconVariant({ variant, fill = "#2E53A3" }) {
  console.log(variant);
  if (variant === "mobile")
    return (
      <IconMobile
        className="mb-[14px]"
        width={" 101.03px"}
        height={" 100.752px"}
        fill={fill}
      />
    );
  else if (variant === "data_config")
    return (
      <IconDataCC
        className="mb-[14px]"
        width={" 101.03px"}
        height={" 100.752px"}
        fill={fill}
      />
    );
  else
    return (
      <IconConfig
        className="mb-[14px]"
        width={" 101.03px"}
        height={" 100.752px"}
        fill={fill}
      />
    );
}

function ServiceCard({ service }) {
  const { icon, title, description, link } = service;
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex flex-col transition-colors p-8 w-[70%] h-[366px] shadow-[0_0_14px_0_rgba(11,27,0,0.10)]  ${
        hover ? "bg-[#2E53A3]" : "bg-[#fff]"
      }`}
    >
      <IconVariant variant={icon} fill={hover ? "#FFF" : "#2E53A3"} />
      <h4
        className={`text-[#0F0F0F] mb-[14px] text-[22px] text-[Inter] font-semibold leading-[124.523%] ${
          hover && "text-white"
        }`}
      >
        {title}
      </h4>

      <p className="text-[#B7B7B7] text-[14px] mb-[14px] text-[Inter]  leading-[124.523%]">
        {description}
      </p>
      <div
        className={`text-white ${hover ? "inline-flex flex-row" : "hidden"}`}
      >
        <a href={link} target="_blank" rel="noreferrer">
          Leer Más <FontAwesomeIcon icon={faGreaterThan} className="ml-2" />
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
