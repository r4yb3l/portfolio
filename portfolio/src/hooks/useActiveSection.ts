import { useEffect, useState } from 'react'

export const useActiveSection = (ids: readonly string[]) => {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const visibility = new Map<string, boolean>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visibility.set(entry.target.id, entry.isIntersecting)
        const current = ids.find((id) => visibility.get(id))
        if (current) setActive(current)
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}
