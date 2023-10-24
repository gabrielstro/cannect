import { cva } from "class-variance-authority";

export const mainSectionStyles = cva([
  'px-8',
  'py-14',
  'lg:py-16',
  'lg:px-16',
  'lg:m-auto',
  'lg:max-w-[1440px]',
])

export const mainCardStyles = cva([
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

export const mainTestimonialStyles = cva([
  'flex',
  'flex-col',
  'w-64',
  'h-[518px]',
  'rounded-lg',
  'gap-6',
  'items-center',
])

export const mainBlogStyles = cva([
  'flex',
  'flex-col',
  'min-w-[252px]',
  'lg:min-w-[432px]',
  'h-[617px]',
  'rounded-3xl',
  'gap-5',
])