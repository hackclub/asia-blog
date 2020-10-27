import Meta from '../components/meta/index'
import SectionTemplate from '../components/sections/index'
import Header from '../components/header/index'
import Head from 'next/head'

export default ({ sectiondata,metadata, section }) => (
  <>
    <Header />
    <Meta isSection={true} title={section} />
    <SectionTemplate title={metadata.title} desc={metadata.para} data={sectiondata} />
  </>
)

export const getStaticPaths = () => {
  const { getJSONData } = require('../lib/utility/index')
  const { paths } = getJSONData('sectionslugs')
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { getSectionData } = require('../lib/utility/index')
  const { section } = params
  const metadata = section === 'articles'? require(`../lib/data/sections/recents/index`) :  require(`../lib/data/sections/${section}/index`)
  const sectiondata = await getSectionData(section)
  return { props: { sectiondata, metadata:metadata.default, section } }
}
