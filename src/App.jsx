import { useState } from 'react'
import { Majors } from './majors-categories'
import './styles.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='temp-navigation'>h</div>
      <Majors/>
    </>
  )
}

export default App
 