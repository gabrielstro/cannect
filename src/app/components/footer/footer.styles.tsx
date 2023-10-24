import { cva } from "class-variance-authority";

export const footerStyles = cva([
  'flex',
  'flex-col',
  'bg-emerald-700',
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
])