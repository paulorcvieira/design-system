import { useState } from "react"

import { FeedbackContentStep } from "./Steps/FeedbackContentStep"
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"

export const feedbackTypes: FeedbackTypes = {
  BUG: {
    title: 'Problema',
    icon: 'bug'
  },
  IDEA: {
    title: 'Ideia',
    icon: 'idea',
  },
  OTHER: {
    title: 'Outro',
    icon: 'thought'
  },
  WHATSAPP: {
    title: 'Whatsapp',
    icon: 'whatsapp'
  },
}

type IconName = 'bug' | 'idea' | 'thought' | 'whatsapp'

export type FeedbackTypes = {
  [key: string]: {
    title: string
    icon: IconName
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ): (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ): (
            <FeedbackContentStep 
              feedbackType={feedbackType} 
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a href="https://github.com/paulorcvieira" className="underline underline-offset-2">Paulo Vieira</a>
      </footer>
    </div>
  )
}