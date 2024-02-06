import { Route, 
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements
 } from "react-router-dom";
import './App.css'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Service from './routes/Service'
import About from './routes/About'



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  );
  
  return (
    <>
    <RouterProvider  router={router}
   />
    </>
  )
}

export default App
