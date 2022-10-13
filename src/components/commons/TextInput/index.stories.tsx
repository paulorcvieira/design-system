import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from '../../../../src/styles/icons'

import { InputRootProps, TextInput } from './'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type you email here" />
    ],
    color: 'brand',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<InputRootProps>

export const Default: StoryObj<InputRootProps> = {}

export const WithoutIcon: StoryObj<InputRootProps> = {
  name: 'Without Icon',
  args: {
    children: <TextInput.Input placeholder="Type you text here" />
  }
}