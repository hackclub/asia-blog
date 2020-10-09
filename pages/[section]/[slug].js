import { map } from 'lodash'
import { Container, jsx } from 'theme-ui'
import Error from 'next/error'
import Header from '../../components/header/index'
import Content from '../../components/blogcomps/content'
import Footer from '../../components/footer/index'
import Intro from '../../components/blogcomps/intro'
import getAuthorImageUrl from '../../lib/data/author/index'
import Suggestions from '../../components/blogcomps/suggestions'

export default ({ section, slug, data, content }) => {
  if (!slug || !data) return <Error statusCode={404} />
  return (
    <>
      <Header isHomePage={false} section="articles" />
      <Container variant="copy" as="main">
        <Intro
          heading={data.title}
          authorimgurl={data.author}
          posterimgurl={data.posterimgurl}
        />
        <Content content={content} section="articles" slug={slug} />
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
  const mdFile = await getFile(section, slug)
  const data = getBlogData(mdFile)
  data.authorimgurl = getAuthorImageUrl(data.author)
  data.posterimgurl = getPosterUrl(section, slug, true)
  const content = getBlogContent(mdFile)
  return { props: { section, slug, data, content } }
}
