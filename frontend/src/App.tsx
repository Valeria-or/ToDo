import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './components/MainPage'
import Navbar from "./components/Navbar"

function App() {

  return (
    <><Navbar/>
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
    
    
    </Routes>
    </>
  )
}

export default App
