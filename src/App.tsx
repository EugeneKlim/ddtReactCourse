import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Clock from './Clock'
import ButtonCO from './ButtonCO'






function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <ButtonCO />
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Уменьшение срока жизни мыши: {count}
          </button>
        </p>
        <Clock/>
        <p>
          Размещено на
          {' | '}
          <a
            className="App-link"
            href="https://github.com/EugeneKlim/ddtReactCourse"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        
      </header>
    </div>
  )
}

export default App


