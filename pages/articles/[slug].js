import { map } from 'lodash'
import { Container, jsx } from 'theme-ui'
import Error from 'next/error'
import Header from '../../components/header/index'
import Content from '../../components/blogcomps/content'
import Footer from '../../components/footer/index'

export default ({ slug, data, content }) => {
  if (!slug || !data) return <Error statusCode={404} />
  return (
    <>
      <Header />
      <Container variant='copy' as='main'>
        <Content content={content} section='articles' slug={slug} />
      </Container>
      <Footer />
    </>
  )
}
/**   <Header
        title={data.title}
        desc={data.para}
        bgImg={`/api/patterns/${slug}`}
      />
 */
export const getStaticPaths = () => {
  const { getBlogSlugs } = require('../../lib/utility/index')
  const slugs = getBlogSlugs('articles')
  console.log('slugs are', slugs)
  const paths = map(slugs, (slug) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const {
    getFile,
    getBlogData,
    getBlogContent,
  } = require('../../lib/utility/index')
  const { slug } = params
  const mdFile = await getFile('articles', slug)
  const data = getBlogData(mdFile)
  const content = getBlogContent(mdFile)

  return { props: { slug, data, content } }
}
