import { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from './'

export default {
  title: 'Components/Heading',
  component: Heading,
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
} as Meta<HeadingProps>

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  }
}

export const MediumDefault: StoryObj<HeadingProps> = {}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  name: 'Custom Component',
  args: {
    asChild: true,
    children: (
      <h1>Custom component with Heading 1 children</h1>
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