import './styles/global.css'

import { Widget } from './components/Widget'

export function App() {
  return (
    <div className="w-full h-full bg-gray-800">
      <span className="text-white">
        Hello!
      </span>
      <Widget />
    </div>
  )
}
