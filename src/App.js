import { Routes, Route } from 'react-router-dom'
import InfoCard from './components/InfoCard'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import Home from './pages/Home'
import Profile from './pages/Profile'
import './styles/index.css'

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
