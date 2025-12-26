import Features from "./components/Features/Features"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"
import Pricing from "./components/Pricing/Pricing"
import Testimonials from "./components/Testimonials/Testimonials"

function App() {
 

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
    </div>
  )
}

export default App
