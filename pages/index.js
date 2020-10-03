import Header from '../components/header/index'
import Footer from '../components/footer/index'
import Hero from '../components/landingpage/hero/index'
import SlideSection from '../components/landingpage/slidingsection/index'
import VerticalSection from '../components/landingpage/verticalsection/index'

export default function Home() {
  return (
    <>
      <Header bg='white' />
      <Hero />
      <SlideSection />
      <VerticalSection />
      <Footer />
    </>
  )
}
