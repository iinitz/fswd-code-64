import { useCallback, useState } from "react"

const useInput = (initialState) => {
  const [state, setState] = useState(initialState)
  const onChange = useCallback(
    (event) => {
      setState(parseInt(event.target.value))
    },
    [],
  )
  return [state, onChange]
}

export default useInput
