// src/components/debug/PureAntsTest.tsx

import { useState } from 'react'

// We define all the necessary CSS as a string constant.
const marchingAntsCss = `
  @keyframes marching-ants-test {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 24px 0;
    }
  }

  .marching-ants-border {
    /* The repeating gradient that creates the dashed line effect */
    background-image: repeating-linear-gradient(
      to right,
      #f97316 0, /* Using a hex code for simplicity */
      #f97316 6px,
      transparent 6px,
      transparent 12px
    );
  }

  .animate-marching-ants {
    animation: marching-ants-test 1s linear infinite;
  }
`

export default function PureAntsTest() {
  // We use React state to control the hover effect.
  const [isHovered, setIsHovered] = useState(false)

  // Dynamically build the class string for the outer div.
  const outerDivClasses = [
    'rounded-lg',
    'p-1', // This padding creates the border thickness
    'transition-all',
    // Apply our custom classes only when hovered
    isHovered ? 'marching-ants-border' : '',
    isHovered ? 'animate-marching-ants' : '',
  ]
    .join(' ') // Join the array into a single string
    .trim() // Remove any extra whitespace

  return (
    <div className="my-12">
      {/* Inject the CSS directly into the document head */}
      <style>{marchingAntsCss}</style>

      {/* The Parent Div: This is the "picture frame" */}
      <div
        className={outerDivClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* The Child Div: This is the "picture" inside the frame */}
        <div className="rounded-md bg-gray-700 p-4">
          <h2 className="text-2xl font-bold text-orange-400">
            Pure Marching Ants Test
          </h2>
          <p className="mt-2 text-slate-300">
            This box should have an animated dashed border when you hover over
            it.
          </p>
        </div>
      </div>
    </div>
  )
}
