'use client'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { cardInfoStyles } from "./cardInfo.styles";

export default function cardInfo({title, text, icon, ...props }: { title: string, text: string, icon: IconProp, props?: any } ) {
  return (
    <div className="flex gap-6">
      <div className={cardInfoStyles()}>
        <FontAwesomeIcon icon={icon} size="2x" color="#48b791" className="self-baseline" />
        <h3 className="font-bold text-xl">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}
