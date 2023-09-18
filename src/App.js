import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Navbar from './component/Navbar'
export default function App() {
  return (<>
  
  <BrowserRouter>
<Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='blog' element={<Blog/>}/>
  </Routes> 
  
  </BrowserRouter>
  
  
  
  
  
  
  </>
    
  )
}
