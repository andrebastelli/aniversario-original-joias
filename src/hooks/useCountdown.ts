import { useState, useEffect } from 'react'

interface CountdownValues {
  days: string
  hours: string
  minutes: string
  seconds: string
}

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

export function useCountdown(targetDate: string): CountdownValues {
  const [values, setValues] = useState<CountdownValues>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const tick = () => {
      const diff = target - Date.now()
      if (diff <= 0) {
        setValues({ days: '00', hours: '00', minutes: '00', seconds: '00' })
        return
      }
      const d = Math.floor(diff / 86400000)
      const h = Math.floor((diff % 86400000) / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setValues({ days: pad(d), hours: pad(h), minutes: pad(m), seconds: pad(s) })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return values
}
