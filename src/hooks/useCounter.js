import { useEffect, useRef, useState } from 'react'

const easeOutExpo = t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

/**
 * Returns [displayValue, ref].
 * Attach `ref` to the element; the counter starts when it enters the viewport.
 */
export default function useCounter(target, duration = 1800) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = ts => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.round(easeOutExpo(progress) * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return [count, ref]
}
