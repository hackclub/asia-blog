import Head from 'next/head'
import SectionTemplate from '../components/sections/index'

export default ({ sections }) => (
  <>
    {console.log(sections)}
    <SectionTemplate data={sections} title={'Recent Articles'} />
  </>
)

export const getStaticPaths = () => {
  const { getJSONData } = require('../lib/utility/index')
  const { paths } = getJSONData('sectionslugs')
  return { paths, fallback: false }
}

export const getStaticProps = async () => {
  const { getSectionData } = require('../lib/utility/index')
  const sections = await getSectionData('articles')
  return { props: { sections } }
}
