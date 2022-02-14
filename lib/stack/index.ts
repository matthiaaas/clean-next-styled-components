import { useEffect, useState } from "react"

let stack = []
let listeners = []

const useStack = (effectId?: string) => {
  const [hasFocus, setFocus] = useState(false)

  const addFocus = (id: string) => {
    stack = [id, ...stack]

    for (const listener of listeners) {
      listener()
    }
  }

  const removeFocus = (id: string) => {
    stack = stack.filter(item => item !== id)

    for (const listener of listeners) {
      listener()
    }
  }

  useEffect(() => {
    if (effectId) {
      listeners.push(() => setFocus(stack.includes(effectId)))
    }
  }, [])

  return {
    ...(effectId ? { hasFocus } : {}),
    addFocus,
    removeFocus
  }
}

export default useStack
