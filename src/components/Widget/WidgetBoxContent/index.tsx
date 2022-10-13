import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes } from "react";

interface BoxContentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export function WidgetBoxContent(props: BoxContentProps) {
  const Component = props.asChild ? Slot : 'button'

  return (
    <Component
      className="flex flex-col items-center flex-1 gap-2 py-5 border-2 border-transparent rounded-lg w-28 bg-zinc-800 justify-evenly hover:border-brand-500 focus:border-brand-500 focus:outline-none"
      type="button"
      {...props}
    />
  )
}