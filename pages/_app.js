import * as React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme/index'
import Meta from '@hackclub/meta'

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
        <Meta
          name="Blog-Hack Club India"
          title="Blog-Hack Club India"
          as={Head}
        />
        <Head>
          <meta name="twitter:site" content="@hackclubindia" />{' '}
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
