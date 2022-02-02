import { useMemo } from "react";
import Countdown from "./components/Countdown";
import useInput from "./hooks/useInput";
import Input from "./components/Input";

const App = () => {
  const [count, onCountChange] = useInput(0)
  const [multiplier, onMultiplierChange] = useInput(1)
  // const [count, setCount] = useState(0)
  // const [multiplier, setMultiplier] = useState(1)
  // const onCountChange = useCallback(
  //   (event) => setCount(parseInt(event.target.value)),
  //   [],
  // )
  // const onMultiplierChange = useCallback(
  //   (event) => setMultiplier(parseInt(event.target.value)),
  //   [],
  // )
  const countdownValue = useMemo(
    () => count * multiplier,
    [count, multiplier],
  )
  return (
    <>
      <Input value={count} onChange={onCountChange} />
      <Input value={multiplier} onChange={onMultiplierChange} />
      <Countdown initialValue={countdownValue} />
    </>
  );
}

export default App;
