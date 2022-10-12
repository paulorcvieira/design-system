import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../Text'

import { Checkbox, CheckboxProps } from './'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar-me por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}