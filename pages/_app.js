import * as React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme/index'

import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import '../lib/css/okaidia.css'

import '../lib/css/index.css'

import { ThemeProvider } from 'theme-ui'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="twitter:site" content="@hackclubindia" />
          <link
            key="safari_icon"
            rel="mask-icon"
           href="https://assets.hackclub.com/favicons/safari-pinned-tab.svg"
           color="#ec3750"
    />
 <link
      key="apple_icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href="https://assets.hackclub.com/favicons/apple-touch-icon.png"
    />
      <link
      key="favicon_32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://assets.hackclub.com/favicons/favicon-32x32.png"
    />
      <link
      key="favicon_16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://assets.hackclub.com/favicons/favicon-16x16.png"
       />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
