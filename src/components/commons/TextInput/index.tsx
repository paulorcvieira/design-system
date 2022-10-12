import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface InputRootProps {
  children: ReactNode
}

function InputRoot({ children }: InputRootProps) {
  return (
    <div
      className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300"
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
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 w-full outline-none"
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