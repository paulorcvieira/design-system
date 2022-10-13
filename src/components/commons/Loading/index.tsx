import clsx from "clsx";
import { CircleNotch } from "phosphor-react";

export interface LoadingProps {
  color?: 'cyan' | 'brand' | 'gray' | 'black' | 'white' | 'green' | 'red' | 'yellow' | 'orange' | 'blue'
}

export function Loading({ color = 'white' }: LoadingProps) {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden text-">
      <CircleNotch
        weight="bold"
        className={clsx(
          'w-4 h-4 animate-spin',
          {
            'text-cyan-500': color === 'cyan',
            'text-brand-500': color === 'brand',
            'text-gray-500': color === 'gray',
            'text-green-500': color === 'green',
            'text-red-500': color === 'red',
            'text-yellow-500': color === 'yellow',
            'text-orange-500': color === 'orange',
            'text-blue-500': color === 'blue',
            'text-white': color === 'white',
            'text-black': color === 'black',
          }
        )}
      />
    </div>
  )
}