import { CircleWavyCheck } from "../../../../../styles/icons";
import { Button } from "../../../../commons/Button";
import { CloseButton } from "../../../../commons/CloseButton";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <CircleWavyCheck size={56} className="text-green-500" />

        <span className="text-xl mt-2 mb-6 text-white" role="status">Agradecemos o feedback!</span>

        <Button
          onClick={onFeedbackRestartRequested}
          color="gray"
        >
          Quero enviar outro
        </Button>

      </div>
    </>
  )
}