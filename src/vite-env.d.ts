/// <reference types="vite/client" />
/// <reference types="@react-router/dev/vite" />

declare module '*.svg?react' {
  import * as React from 'react'

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGAElement> & { title?: string }
  >

  export default ReactComponent
}

declare module '*.jpg' {
  const value: string
  export default value
}
declare module '*.png' {
  const value: string
  export default value
}
declare module '*.jpeg' {
  const value: string
  export default value
}
declare module '*.gif' {
  const value: string
  export default value
}
declare module '*.svg' {
  const value: string
  export default value
}
