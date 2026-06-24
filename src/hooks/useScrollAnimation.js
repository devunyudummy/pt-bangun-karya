import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible].
 * Attach `ref` to the element you want to watch.
 * `isVisible` flips to true once the element enters the viewport
 * and stays true (animate once).
 */
export default function useScrollAnimation(threshold = 0.12) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
