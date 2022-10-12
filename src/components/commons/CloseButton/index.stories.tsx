import { Popover } from '@headlessui/react'
import { Meta, StoryObj } from '@storybook/react'
import { CloseButton } from './'

export default {
  title: 'Components/CloseButton',
  component: CloseButton,
  args: {
    title: 'Fechar formulário'
  },
  decorators: [
    (Story) => {
      return (
        <Popover>
          {Story()}
        </Popover>
      )
    }
  ],
} as Meta

export const Default: StoryObj = {}