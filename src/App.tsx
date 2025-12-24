import Features from "./components/Features/Features"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"

function App() {
 

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <NavBar />
      <Hero />
      <Features />
    </div>
  )
}

export default App
