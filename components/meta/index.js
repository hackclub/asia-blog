import Head from 'next/head'
import WebsiteMeta from './website'
import ArticleMeta from './article'
import SectionMeta from './section'

export default ({ title, isSection ,isArticle=false, author, date, description, posterimgurl }) =>
 
  isSection ? <SectionMeta title={title} /> : isArticle ? <ArticleMeta title={title} author={author} description={description} posterimgurl={posterimgurl} />
    : <WebsiteMeta title={title} /> 

