import HeroLayout from "./hero-layout"
import AboutUs from "./aboutus"
import Emoji from 'a11y-react-emoji'
import Header from "./header"
import Footer from "./footer"
import Testimonials from './testimonials'
import Clients from './clients'

export default function Home() {
  return (
    <main className="min-h-screen 2xl:container m-auto hero-section">
      <Header/>
      <HeroLayout/>
      <Clients/>
      <Testimonials/>
      <AboutUs/>
      <Footer/>
    </main>
  )
}
