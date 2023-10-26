'use client'
import React from "react";
import Image from "next/image";
import { cardBlogStyles } from "./cardBlog.styles";

export default function cardBlog({photoSrc, title, text, ...props }: { photoSrc: string, title: string, text: string, props?: any } ) {
  return (
    <div className={cardBlogStyles()}>
      <Image src={photoSrc} className="object-cover rounded-t-2xl" alt={""} width={432} height={283} style={{maxHeight: '283px', minHeight: '283px'}}/>
      <h3 className="text-xl font-bold px-5">{title}</h3>
      <p className="px-5 text-ellipsis overflow-hidden">{text}</p>
    </div>
  )
}
