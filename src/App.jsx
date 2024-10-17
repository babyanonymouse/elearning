import Hero from "./components/Hero/Hero.jsx"
import Services from "./components/Services/Services"
import Banner from "./components/Banner/Banner"
const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner />
    </main>
  )
}

export default App