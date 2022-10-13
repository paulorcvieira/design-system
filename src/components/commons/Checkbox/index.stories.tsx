import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../Text'

import { Checkbox, CheckboxProps } from './'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    id: 'storybook'
  },
  decorators: [
    (Story) => {
      return (
        <label className="flex items-center gap-2" htmlFor="storybook">
          {Story()}
          <Text size="sm">Lembrar-me por 30 dias</Text>
        </label>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}