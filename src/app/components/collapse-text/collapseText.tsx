'use client'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function CollapseText({title, text, ...props }: { title: string, text: string, props?: any } ) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex gap-5">
        <h3 className="mb-8 text-3xl">{title}</h3>
        <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} size="2x" onClick={() => setOpen(!open)} />
      </div>
      {open && 
        <div className="mb-8 text-xl">{text}</div>
      }
    </div>
  )
}