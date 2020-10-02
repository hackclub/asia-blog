import Header from '../components/header/index'
import Footer from '../components/footer/index'
import Hero from '../components/landingpage/hero/index'
import Slidecomp from '../components/landingpage/slidingsection/index'

export default function Home() {
  return (
    <>
      <Header bg='white' />
      <Hero />
      <Slidecomp />
      <Footer />
    </>
  )
}
