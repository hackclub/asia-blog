import Head from 'next/head'
export default ({ title }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="title" content={title} />
    <meta
      name="description"
      content="Welcome to Hack Club India's blog, it is a place to share and explore ideas and stories and know what the Hack Club community is doing!"
    />
    <meta
      name="keywords"
      content="hack club,hack club india,hack club india blog, blog,hack club updates, events, hack club news"
    />
    <meta name="author" content="Harsh Bajpai" />

    <meta property="og:title" content="Hack Club India-Blog" />
    <meta property="og:type" content="website" />

    <meta
      property="og:description"
      content="Welcome to Hack Club India's blog, it is a place to share and explore ideas and stories and know what the Hack Club community is doing!"
    />
    <meta
      property="og:image"
      content="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/poster.png"
    />
    <title>{title}</title>
  </Head>
)
