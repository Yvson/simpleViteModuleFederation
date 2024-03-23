// React
import { useState } from "react";

// Assets
import './App.css'

function RemoteCounter() {
  const [ counter, setCounter ] = useState<number>(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((counter) => counter+1)}>
        Remote Counter Button
      </button>
    </div>
  )
}

export default RemoteCounter
