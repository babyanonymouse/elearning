import Hero from "./components/Hero/Hero.jsx"
import Services from "./components/Services/Services"
import Banner from "./components/Banner/Banner"
import Subscribe from "./components/Subscribe/Subscribe"
import Banner2 from "./components/Banner/Banner2.jsx"
const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
    </main>
  )
}

export default App