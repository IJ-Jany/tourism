import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Service from './routes/Service'

function App() {

  return (
    <>
    <Routes>
      <Route path="" element=""/>
    <Navbar/>
    <Home/>
    <Contact/>
    <Service/>
    </Routes>
    </>
  )
}

export default App
