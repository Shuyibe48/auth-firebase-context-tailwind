import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <Home/>
      <Outlet/>
    </div>
  )
}

export default App
