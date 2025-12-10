
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/home'
import { Signup } from './components/signup'
import { SignIn } from './components/signin'
import { Dashboard } from './components/dashboard'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>

      <Route path='/' element={<Home/>}></Route>

      <Route path='/signup' element={<Signup/>}></Route>

      <Route path='/signin' element={<SignIn/>}></Route>
       <Route path='/dashboard' element={<Dashboard/>}></Route>
      
     </Routes>
     
     </BrowserRouter>
 
    </>
  )
}

export default App
