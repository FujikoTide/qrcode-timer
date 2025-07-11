import { useState, useEffect } from 'react'

/**
 * A custom hook to determine if a media query matches the current viewport.
 * @param query The media query string (e.g., '(min-width: 768px)')
 * @returns A boolean indicating if the query matches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}
