import Header from '../components/header/index'
import Footer from '../components/footer/index'
import Hero from '../components/landingpage/hero/index'
import Hq from '../components/landingpage/sections/hq'
import Articles from '../components/landingpage/sections/articles'
import Events from '../components/landingpage/sections/events'
import Workshops from '../components/landingpage/sections/workshops/index'
import Category from '../components/landingpage/sections/category/index'
import AMAs from '../components/landingpage/sections/ama'

export default function Home({ hq, articles}) {
  return (
    <>
      <Header shouldBeTransparent={true} />
      <Hero />
      <Hq data={hq} />
      <Articles data={articles} />
      <Events />
      <Workshops />
      <Category />
      <AMAs />
      <Footer />
    </>
  )
}

export const getStaticProps = async () => { 
  const {getSectionData } = require('../lib/utility/index')
  const hq = getSectionData('hq')
  const articles = getSectionData('articles')
  return { props: { hq, articles, clubs: null } }
}