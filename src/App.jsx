import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './About/About'
import Footer from './Footer/Footer'
import Connect from './Connect/Connect'
import Skill from './Skill/Skill'
import Project from './Project/Project'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><About/><Project/><Skill/><Connect/><Footer/></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
