import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '/counter.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <a href="https://playground.dymension.xyz/rollapps/cryptopunkstar_10089-1/dashboard" target="_blank">
          <img src="/counter.gif" className="logo" alt="Cps" />
        </a>
 
      </div>
      <h1>Counter Cryptopunkstar</h1>
      <p>Click just one and result 3D !</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 3)}>
          count is {count} D
        </button>

      </div>

    </>
  )
}

export default App
