import { Meta, StoryObj } from '@storybook/react'

import { Loading, LoadingProps } from './'

export default {
  title: 'Components/Loading',
  component: Loading,
  args: {
    color: 'brand'
  }
} as Meta<LoadingProps>

export const Default: StoryObj = {}