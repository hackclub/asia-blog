import Head from 'next/head'
export default ({ title, author, description, posterimgurl }) => (
  <Head>
    <meta name="description" content={description} />

    <meta name="title" content={title} />

    <meta
      name="keywords"
      content={`hack club,hack club india,hack club india blog, blog,hack club updates, events, hack club news, ${title}`}
    />
    <meta name="author" content={author} />

    <meta property="og:title" content={title} />
    <meta property="og:type" content="article" />
    <meta property="og:article:author" content={author} />

    <meta property="og:description" content={description} />

    <title>{title}</title>
    <meta property="og:image" content={posterimgurl} />
  </Head>
)
