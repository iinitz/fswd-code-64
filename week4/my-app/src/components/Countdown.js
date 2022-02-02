import { useEffect, useState } from 'react'

const Countdown = ({ initialValue = 10 }) => {
  const [timer, setTimer] = useState(initialValue)
  useEffect(
    () => {
      const interval = setInterval(
        () => {
          setTimer(prev => {
            if (prev > 0) {
              return prev - 1
            }
            return prev
          })
          // setTimer(timer - 1) // setTimer(9)
        },
        1000,
      )
      return () => {
        clearInterval(interval)
      }
    },
    [],
  )
  useEffect(
    () => {
      setTimer(initialValue)
    },
    [initialValue],
  )
  return (
    <div>
      <h1>{timer}/{initialValue}</h1>
    </div>
  )
}
export default Countdown

// useEffect(() => { return () => { } }, [])
