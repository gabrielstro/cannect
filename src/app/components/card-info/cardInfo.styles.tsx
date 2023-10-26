import { cva } from "class-variance-authority";

export const cardInfoStyles = cva([
  'flex',
  'flex-col',
  'w-56',
  'lg:w-80',
  'h-96',
  'rounded-lg',
  'bg-sky-50',
  'px-5',
  'py-3',
  'gap-6',
  'overflow-hidden',
])