import { Container, jsx } from 'theme-ui'
import Error from 'next/error'
import Header from '../../components/header/index'
import Content from '../../components/blogcomps/content'
import Footer from '../../components/footer/index'
import Intro from '../../components/blogcomps/intro'
import getAuthorImageUrl from '../../lib/data/author/index'
import Suggestions from '../../components/blogcomps/suggestions'
import _ from 'ramda'

export default ({ section, slug, data, content }) => {
  if (!slug || !data) return <Error statusCode={404} />
  return (
    <>
      <Header isHomePage={false} section="articles" />
      <Container variant="copy" as="main">
        <Intro
          heading={data.title}
          author={data.author}
          date={data.date}
          posterimgurl={data.posterimgurl}
        />
        <Content content={content} section={section} slug={slug} />
      </Container>
      <Suggestions section={section} />
      <Footer />
    </>
  )
}

export const getStaticPaths = () => {
  const { getJSONData } = require('../../lib/utility/index')
  const { paths } = getJSONData('blogsectionslugs')
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const {
    getFile,
    getBlogData,
    getBlogContent,
    getPosterUrl
  } = require('../../lib/utility/index')

  const { slug, section } = params

  const getData = _.pipe(await getFile, getBlogData)
  const getContent = _.pipe(await getFile, getBlogContent)

  const data = getData(section, slug)
  const content = getContent(section, slug)

 
  data['authorimgurl'] = getAuthorImageUrl(data.author)
  data['posterimgurl'] = getPosterUrl(section, slug, true)
  
  return { props: { section, slug, data, content } }
}
