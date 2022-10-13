import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  color?: 'cyan' | 'brand' | 'gray'
}

export function Button({
  children,
  asChild,
  color = 'cyan',
  className,
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={
        clsx(
          'flex items-center justify-center py-3 px-4 h-12 transition-colors rounded font-semibold text-sm w-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-30',
          {
            'bg-cyan-500': color === 'cyan',
            'hover:bg-cyan-300': color === 'cyan',
            'ring-cyan-500': color === 'cyan',
            'disabled:hover:bg-cyan-500': color === 'cyan',

            'bg-brand-500': color === 'brand',
            'hover:bg-brand-300': color === 'brand',
            'ring-brand-500': color === 'brand',
            'disabled:hover:bg-brand-500': color === 'brand',

            'bg-gray-500': color === 'gray',
            'hover:bg-gray-400': color === 'gray',
            'ring-gray-500': color === 'gray',
            'disabled:hover:bg-gray-500': color === 'gray',

            'text-black': color === 'cyan',
            'text-white': color === 'gray' || color === 'brand',
          },
          className,
        )
      }
      {...rest}
    >
      {children}
    </Comp>
  )
}