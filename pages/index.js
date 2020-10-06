import Header from '../components/header/index'
import Footer from '../components/footer/index'
import Hero from '../components/landingpage/hero/index'
import Hq from '../components/landingpage/sections/hq'
import Recent from '../components/landingpage/sections/recent'
import Events from '../components/landingpage/sections/events'
import Workshops from '../components/landingpage/sections/workshops/index'
import Category from '../components/landingpage/sections/category/index'
import AMAs from '../components/landingpage/sections/ama'

export default function Home() {
  return (
    <>
      <Header shouldBeTransparent={true} />
      <Hero />
      <Hq />
      <Recent />
      <Events />
      <Workshops />
      <Category />
      <AMAs />
      <Footer />
    </>
  )
}
