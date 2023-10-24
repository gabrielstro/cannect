'use client';
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { headerStyles } from "./header.styles";

export default function Header({...props}) {
  const [open, setOpen] = React.useState(false);

  return (
    <header {...props} className={headerStyles()}>
      <Image src={'/cannect.svg'} alt={""} width={160} height={26}/>
      <div className="lg:flex gap-3 hidden">
        <a href="/">produtos</a>
        <a href="/">agende sua consulta</a>
        <a href="/">tratamentos</a>
        <a href="/">para profissionais de saúde</a>
        <a href="/">para parceiros</a>
        <a href="/">blog</a>
        <div className="actions">
          <a href="/login">Login</a>
        </div>
      </div>
      <div className="lg:hidden gap-3 flex">
        <span onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </span>
        {open && 
          <aside className={'flex flex-col fixed h-full w-2/5 p-7 bg-neutral-700 top-0 right-0 rounded-tl-3xl text-stone-300 text-xl gap-6'}>
            <div className="flex justify-end	">
              <span onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={faX} size="2xl" />
              </span>
            </div>
            <p>produtos</p>
            <p>agende sua consulta</p>
            <p>tratamentos</p>
            <p>para profissionais da saude</p>
            <p>para parceiros</p>
            <p>blog</p>
          </aside>
        }
      </div>
    </header>
  )}