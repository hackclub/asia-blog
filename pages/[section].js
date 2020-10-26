import Meta from '../components/meta/index'
import SectionTemplate from '../components/sections/index'
import Header from '../components/header/index'
import Head from 'next/head'

export default ({ sectiondata, section }) => (
  <>
    <Header />
    <Meta title={section} />
    <SectionTemplate data={sectiondata} />
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
  const sectiondata = await getSectionData(section)
  return { props: { sectiondata, section } }
}
