import { FeedbackType, feedbackTypes } from "../../"
import {
  Bug, ChatCircleText, Lightbulb, WhatsappLogo
} from '../../../../../styles/icons'
import { CloseButton } from "../../../../commons/CloseButton"
import { WidgetBoxContent } from "../../../WidgetBoxContent"

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

interface IconsProps {
  [key: string]: JSX.Element
}

interface WidgetIconProps {
  icon: string
}

export const widgetIcons: IconsProps = {
  bug: <Bug size={24} className="text-brand-500 shadow-md hover:shadow-violet-500 bg-transparent rounded-full" />,
  idea: <Lightbulb size={24} className="text-yellow-300 shadow-md hover:shadow-yellow-500 bg-transparent rounded-full" />,
  thought: <ChatCircleText size={24} className="text-cyan-500 shadow-md hover:shadow-cyan-600 bg-transparent rounded-full" />,
  whatsapp: <WhatsappLogo size={24} className="text-green-500 shadow-md hover:shadow-green-700 bg-transparent rounded-full" />,
}

export function WidgetIcon({ icon }: WidgetIconProps) {
  return (
    <span className="rounded-full p-2">
      {widgetIcons[icon]}
    </span>
  )
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 text-white">Deixe seu feedback</span>
        <CloseButton />
      </header>
      
      <div className="flex w-full gap-2 py-8">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          const content = () => (
            <>
              <WidgetIcon icon={value.icon} />
              <span className="text-white">{value.title}</span>
            </>
          )

          if (key === 'WHATSAPP') {
            return (
              <WidgetBoxContent
                asChild
                key={key}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5542999866997&text=Ola%20Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content()}
                </a>
              </WidgetBoxContent>
            )
          }

          return (
            <WidgetBoxContent
              onClick={() => onFeedbackTypeChanged(key)}
              key={key}
            >
              {content()}
            </WidgetBoxContent>
          )
        })}
      </div>
    </>
  )
}