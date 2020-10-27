import Head from 'next/head'
import WebsiteMeta from './website'
import ArticleMeta from './article'

export default ({ title, isArticle, author, date, description, posterimgurl }) => (
  <Head>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    { isArticle ? <ArticleMeta title={title} author={author} description={description} posterimgurl={posterimgurl} />
      : <WebsiteMeta />}
     <title>{title}</title>
  </Head>
)
