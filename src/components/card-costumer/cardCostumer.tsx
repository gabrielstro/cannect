'use client'
import React from "react";
import Image from "next/image";
import { cardCostumerStyles } from "./cardCostumer.styles";

export default function cardCostumer({photoSrc, title, text }: { photoSrc: string, title: string, text: string } ) {
  return (
    <div className={cardCostumerStyles()}>
      <Image src={photoSrc} className="rounded-3xl object-cover" style={{maxHeight: '275px', minHeight: '275px', maxWidth: '252px', minWidth: '252px'}} alt={""} width={252} height={275}/>
      <h3 className="text-lg ">{title}</h3>
      <p className="text-ellipsis overflow-hidden">{text}</p>
    </div>
  )
}
