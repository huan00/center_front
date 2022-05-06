import NavBar from './components/NavBar'
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
    </div>
  )
}

export default App
