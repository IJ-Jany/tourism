import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './routes/Home'
import Contact from './routes/Contact'
import Service from './routes/Service'
import About from './routes/About'

function App() {

  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
