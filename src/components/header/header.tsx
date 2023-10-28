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
      <div className="flex w-full max-w-[1440px] m-auto justify-between px-14">
        <Image src={'/cannect.svg'} alt={""} width={160} height={26}/>
        <div className="lg:flex gap-8 hidden justify-center">
          <a href="#">produtos</a>
          <a href="#">agende sua consulta</a>
          <a href="#">tratamentos</a>
          <a href="#">para profissionais de saúde</a>
          <a href="#">para parceiros</a>
          <a href="#">blog</a>
        </div>
        <div className="actions">
          <a href="/login">Login</a>
        </div>
        <div className="lg:hidden gap-3 flex">
          <span onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBars} size="2x" data-testid="menu-icon" />
          </span>
          {open && 
            <aside className={'flex flex-col fixed h-full w-2/5 p-7 bg-neutral-700 top-0 right-0 rounded-tl-3xl text-stone-300 text-xl gap-6'} data-testid="mobile-menu">
              <div className="flex justify-end	">
                <span onClick={() => setOpen(!open)}>
                  <FontAwesomeIcon icon={faX} size="2xl" data-testid="menu-close-icon" />
                </span>
              </div>
              <a href="#">produtos</a>
              <a href="#">agende sua consulta</a>
              <a href="#">tratamentos</a>
              <a href="#">para profissionais da saude</a>
              <a href="#">para parceiros</a>
              <a href="#">blog</a>
            </aside>
          }
        </div>
      </div>
    </header>
  )}