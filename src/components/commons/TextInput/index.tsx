import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface InputRootProps {
  children: ReactNode
  color?: 'cyan' | 'brand' | 'gray'
}

function InputRoot({ color = 'cyan', children }: InputRootProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2',
        {
          'ring-cyan-300': color === 'cyan',

          'ring-brand-300': color === 'brand',

          'ring-gray-400': color === 'gray',
        },
      )}
    >
      {children}
    </div>
  )
}

export interface TextInputIconProps {
  children: ReactNode
}

function InputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputComponent({ ...rest }: InputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 w-full border-transparent outline-none focus:border-transparent focus:ring-0"
      {...rest}
    />
  )
}

InputRoot.displayName = 'TextInput.Root'
InputComponent.displayName = 'TextInput.Input'
InputIcon.displayName = 'TextInput.Icon'

export const TextInput = {
  Root: InputRoot,
  Input: InputComponent,
  Icon: InputIcon,
}