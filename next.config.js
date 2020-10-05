const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  //  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack: (config) => {
    config.node = { fs: 'empty' }
    return config
  },
})

//module.exports = {}
