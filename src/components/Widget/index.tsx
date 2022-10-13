import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from 'phosphor-react'
import { WidgetForm } from './WidgetForm'

export function Widget() {
  return (
    <Popover
      className="absolute bottom-4 right-0 md:bottom-8 md:right-0 flex flex-col items-end opacity-40 focus-within:opacity-100 hover:opacity-100 border-r-8 border-gray-300"
    >
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button 
        className="bg-brand-500 rounded-l-lg px-3 h-12 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span
          className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"
        >
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}