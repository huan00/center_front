import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import Home from './pages/Home'
import './styles/index.css'

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <main>
        <Home />
      </main>
      <footer>
        <SignUp />
      </footer>
    </div>
  )
}

export default App
