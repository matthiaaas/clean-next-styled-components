import useStack from "@/lib/stack"

export default function Home() {
  const stack = useStack()

  return (
    <div>
      <button onClick={() => stack.addFocus("popup:newsletter")}>Add</button>
      <button onClick={() => stack.removeFocus("popup:newsletter")}>
        Remove
      </button>
    </div>
  )
}
