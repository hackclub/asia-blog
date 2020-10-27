export default ({title, author, description, posterimgurl}) =>    
<>
   
    <meta
      name="description"
      content="Welcome to Hack Club India's blog, it is a place to share and explore ideas and stories and know what the Hack Club community is doing!"
    />

    <meta
      name="keywords"
      content={`hack club,hack club india,hack club india blog, blog,hack club updates, events, hack club news, ${title}`}
    />
    <meta name="author" content={author} />

    <meta property="og:title" content={title} />
    <meta property="og:type" content="article" />
    <meta property="og:article:author" content={author} />
   

    <meta
      property="og:description"
      content={description}
    />
    <meta property="og:image" content={posterimgurl} /> 
    
  </>
