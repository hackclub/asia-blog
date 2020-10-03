import Header from '../components/header/index'
import Footer from '../components/footer/index'
import Hero from '../components/landingpage/hero/index'
import Hq from '../components/landingpage/sections/hq'
import Recent from '../components/landingpage/sections/recent'
import Events from '../components/landingpage/sections/events'

export default function Home() {
  return (
    <>
      <Header bg='white' />
      <Hero />
      <Hq />
      <Recent />
      <Events />
      <Footer />
    </>
  )
}
