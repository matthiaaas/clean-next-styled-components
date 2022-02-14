import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import { createPortal } from "react-dom"

interface IProps {
  selector?: string | HTMLElement
  children: ReactNode
}

export default function Portal({ selector = "#__next", children }: IProps) {
  const containerRef = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    containerRef.current =
      (typeof selector === "string"
        ? document.querySelector(selector)
        : selector) || document.body

    setMounted(true)
  }, [selector])

  return mounted ? createPortal(children, containerRef.current) : null
}
