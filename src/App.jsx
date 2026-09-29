import Nav from './components/Nav'
import Hero from './components/Hero'
import Creative from './components/Creative'
import Agency from './components/Agency'
import Technical from './components/Technical'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="letterbox" />
      <Nav />
      <Hero />
      <Creative />
      <Agency />
      <Technical />
      <Footer />
      <div className="letterbox" />
    </>
  )
}
