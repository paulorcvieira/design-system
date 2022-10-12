import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from './'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem Ipsum',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  }
}

export const MediumDefault: StoryObj<TextProps> = {}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  name: 'Custom Component',
  args: {
    asChild: true,
    children: (
      <p>Custom component with paragraph children</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    },
  }
}