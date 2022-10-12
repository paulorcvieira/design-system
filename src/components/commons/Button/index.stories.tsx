import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Lorem Ipsum',
    color: 'cyan'
  },
  argTypes: {
    color: {
      options: ['cyan', 'brand', 'gray'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
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

export const CustomComponent: StoryObj<ButtonProps> = {
  name: 'Custom Component',
  args: {
    asChild: true,
    children: (
      <a
        href="#"
        about="_blank"
        target="_blank"
        rel="noopener noreferrer"
      >
        Custom component with Anchor children
      </a>
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