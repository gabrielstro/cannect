import { cva } from "class-variance-authority";

export const headerStyles = cva([
  'bg-white',
  'flex',
  'fixed',
  'top-0',
  'z-10',
  'w-full',
  'h-[120px]',
  'border-b',
  'border-neutral-300	',
  'justify-between',
  'items-center',
  'px-7',
  'py-8',
])