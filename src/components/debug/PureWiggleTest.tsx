// src/components/debug/PureWiggleTest.tsx

import { useState } from 'react'

// We define the necessary CSS as a simple string constant.
// This includes the keyframes and the class that uses them.
const wiggleAnimationCss = `
  @keyframes wiggle-test {
    0%, 100% {
      transform: rotate(-1deg);
    }
    50% {
      transform: rotate(1deg);
    }
  }

  .animate-wiggle {
    animation: wiggle-test 1s linear infinite;
  }
`

export default function PureWiggleTest() {
  // We use React state to control the hover effect, removing CSS :hover from the equation.
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="my-12">
      {/*
        This <style> tag injects our keyframes and animation class directly
        into the document's head, making them available to this component.
      */}
      <style>{wiggleAnimationCss}</style>

      <div
        className="cursor-pointer rounded-lg bg-slate-800 p-4 text-center"
        // These event handlers control our hover state
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          // The animation class is applied ONLY when isHovered is true.
          className={isHovered ? 'animate-wiggle' : ''}
        >
          <h2 className="text-2xl font-bold text-orange-400">
            Pure Wiggle Test
          </h2>
          <p className="mt-2 text-slate-300">
            This box should wiggle when you hover over the dark gray area.
          </p>
        </div>
      </div>
    </div>
  )
}
