import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

interface CloseButtonProps {
  title?: string
}

export function CloseButton({ title = 'Fechar' }: CloseButtonProps) {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title={title}
    >
      <X className="w-4 h-4" weight="bold" />
    </Popover.Button>
  )
}