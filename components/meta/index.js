import Head from 'next/head'
import WebsiteMeta from './website'
import ArticleMeta from './article'

export default ({ title, isArticle=false, author, date, description, posterimgurl }) =>
 
  isArticle ? <ArticleMeta title={title} author={author} description={description} posterimgurl={posterimgurl} />
    : <WebsiteMeta /> 

