import { Popover } from '@headlessui/react'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'

import { feedbackTypes } from '../../'
import { FeedbackContentStep, FeedbackContentStepProps } from './'

export default {
  title: 'Widget UI/FeedbackContentStep',
  component: FeedbackContentStep,
  args: {
    feedbackType: 'IDEA'
  },
  parameters: {
    msw: {
      handlers: [
        rest.post('/feedbacks', (req, res, ctx) => {
          return res(ctx.json({ message: 'success!' }))
        })
      ],
    }
  },
  argTypes: {
    feedbackType: {
      options: Object.keys(feedbackTypes).filter(k => k !== 'WHATSAPP'),
      control: {
        type: 'inline-radio'
      }
    }
  },
  decorators: [
    (Story) => {
      return (
        <Popover>
          <Popover.Panel static>
            <div className="relative flex flex-col items-center px-4 pt-4 rounded-lg bg-zinc-900 w-96">
              {Story()}
            </div>
          </Popover.Panel>
        </Popover>
      )
    }
  ],
} as Meta<FeedbackContentStepProps>

export const Bug: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'BUG',
  },
}

export const Idea: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'IDEA',
  },
}

export const Other: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'OTHER',
  },
}