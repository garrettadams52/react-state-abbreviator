import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './statedata/index.js'
import statedata from './statedata/index.js'



function App() {

  const [data,setData] = useState(statedata)
  const [sel, setSel] = useState('')

  let handleStateChange = (e) => {
    setSel(e.target.value)
  }

  return (
    <div className="App">
      <div>
      <h4>Abbreviation: {sel}</h4>
      <select onChange={handleStateChange}> 
        {data.map((option, index) =>
          <option key={index} value={option['alpha-2']}>
          {option.name}
          </option>
        )}
      </select>
      </div>
    </div>
  )
}

export default App
