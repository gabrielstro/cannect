import { cva } from "class-variance-authority";

export const footerStyles = cva([
  'flex',
  'flex-col',
  'bg-[#21976e]',
  'p-12',
  'text-white',
])

export const footerContainerStyles = cva([
  'flex',
  'flex-col',
  'md:flex-row',
  'items-center',
  'md:align-baseline',
  'gap-14',
  'm-auto',
])