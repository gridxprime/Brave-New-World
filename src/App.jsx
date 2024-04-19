import { useState } from 'react'
import { VideoList } from './components/VideoList'
import './Style.css'

function App() {
  const [count, setCount] = useState(0)

  return (

  <>
    <h1>Hello World</h1>
    <VideoList />
  </>
      


  )
}

export default App
