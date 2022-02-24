import { useState } from 'react'
import './App.css'

const INITIAL_TIME_IN_SECONDS = 25 * 60



function App() {
  const [secondsAmount, setSecondsAmount] = useState(INITIAL_TIME_IN_SECONDS)

  const minutes = Math.floor(secondsAmount / 60)
  const seconds = secondsAmount % 60

  return (
    <div className="App">
      <header className="App-header">
        <h1>P⏱modoro</h1>
      </header>
      <main>
        <div className="App-timmer">
          <span>{String(minutes).padStart(2,'0')}</span>
          <span>:</span>
          <span>{String(seconds).padStart(2,'0')}</span>
        </div>
      </main>
    </div>
  )
}

export default App
