import { FC } from "react"

import useStack from "@/lib/stack"

import Portal from "@/components/Portal"

export const subscribePopup = (id: string, component: FC) => () => {
  const stack = useStack(id)

  const Component: FC = component

  if (!stack.hasFocus) return null

  return (
    <Portal>
      <Component />
    </Portal>
  )
}
