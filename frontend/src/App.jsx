
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
