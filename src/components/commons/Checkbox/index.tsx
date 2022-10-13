import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { Check } from '../../../styles/icons';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  color?: 'cyan' | 'brand' | 'gray'
}

export function Checkbox({ color = 'cyan', ...rest}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
      defaultChecked
      {...rest}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check
          weight="bold"
          className={clsx(
            'h-5 w-5 text-cyan-500',
            {
              'text-cyan-500': color === 'cyan',

              'text-brand-500': color === 'brand',
              
              'text-gray-500': color === 'gray',
            }
          )}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}