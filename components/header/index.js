/**@jsx jsx */
import { jsx, Flex, Grid, Box } from 'theme-ui'
import styled from '@emotion/styled'
import Icon from '@hackclub/icons'
import { useState } from 'react'
import ScrollLock from 'react-scrolllock'
import { withResizeDetector } from 'react-resize-detector'
import Bounce from 'react-reveal/Bounce'

import headerTransparencyUtility from './utilities/index'

/***
 * Header of the website
 */

export default withResizeDetector(({ width, bg }) => {
  const [scroll, setscroll] = useState(false)
  const [transparent, setTransparency] = useState(true)
  if (width > 767) {
    if (scroll) setscroll(false)
  }

  headerTransparencyUtility((currentPosition) => {
    if (currentPosition > 104) {
      setTransparency(false)
    }
    if (currentPosition < 104) {
      setTransparency(true)
    }
  })

  return (
    <Box
      as='header'
      columns={[2, 2, 3, 3]}
      sx={{
        width: '100%',
        background: transparent
          ? 'transparent'
          : bg
          ? bg
          : `linear-gradient(90.37deg, #5BC0DE 1.92%, #338EDA 78.03%)`,
        display: 'fixed',
        zIndex: 5000,
        minHeight: '70px',
        opacity: '0.97',
        position: 'fixed',
        borderBottom: transparent
          ? 'none'
          : '1px solid rgba(48, 48, 48, 0.125)',
      }}>
      <ScrollLock isActive={scroll} />
      <Overlay display={scroll} />
      <Flex sx={{ width: '100%' }}>
        <img
          onClick={() => {
            console.log('testing')
          }}
          src='https://raw.githubusercontent.com/hackclub/india-site/master/public/hackclubflag.png'
          sx={{
            width: ['100px', '110px', '120px'],
            position: 'absolute',
            ml: [2, 3, 2, 5],
          }}
        />
        <Flex
          as='nav'
          sx={{
            flex: 1,
            alignItems: 'center',
            flexDirection: ['row-reverse', 'row-reverse', 'row'],
            justifyContent: ['initial', 'initial', 'center'],
            a: {
              fontSize: '20px',
              display: ['none', 'none', 'initial'],
              mx: 3,
              color: bg ? 'black' : 'white',
              cursor: 'pointer',
              fontWeight: 'normal',
            },
          }}>
          <Nav data={data} transparency={transparent} />
          <span
            onClick={() => {
              setscroll(!scroll)
              console.log(width)
            }}
            sx={{ position: 'absolute', zIndex: 2000 }}>
            <Icon
              sx={{
                mr: [3],
                display: [
                  scroll ? 'none' : 'initial',
                  scroll ? 'none' : 'initial',
                  'none',
                ],
                fill: transparent ? 'white' : 'initial',
              }}
              glyph='menu'
              size={['44px']}
            />
            <Icon
              sx={{
                mr: [3],
                display: [
                  !scroll ? 'none' : 'initial',
                  !scroll ? 'none' : 'initial',
                  'none',
                ],
              }}
              size={['44px']}
              glyph='view-close'
            />
          </span>
        </Flex>
      </Flex>
    </Box>
  )
})

const Customh3 = styled.h3``
const Nav = ({ data, transparency }) => (
  <>
    {data.map((ele) => (
      <Customh3
        as='a'
        href={ele.url ? ele.url : '#'}
        sx={{ textDecorationLine: 'none' }}>
        <span
          sx={{
            color: transparency ? 'white' : '',
          }}>
          {ele.text}
        </span>
      </Customh3>
    ))}
  </>
)

const data = [
  { text: 'Home', url: './' },
  { text: 'Blog', url: './' },
  { text: 'Join', url: 'https://github.com/hackclub/hackstore' },
  { text: 'Team', url: './team' },
  { text: 'FAQs', url: './team' },
]

const Overlay = ({ display }) => (
  <div
    sx={{
      position: 'absolute',
      height: '100vh',
      width: '100vw',
      bg: 'white',
      opacity: '0.99',
      display: display ? 'flex' : 'none',
      pt: '90px',
      flexDirection: 'column',
    }}>
    <OverlayItem Text={'Home'} url='./' />
    <OverlayItem Text={'Blog'} url='./' />
    <OverlayItem Text={'Join'} url='./team' />
    <OverlayItem Text={'Team'} url='./team' />
    <OverlayItem Text={'FAQs'} url='./team' />
  </div>
)

const OverlayItem = ({ Text, url }) => (
  <div sx={{ ml: 4, my: 0 }}>
    <p
      sx={{
        fontSize: 2,
        my: 2,
        width: '80%',
        borderBottom: '1px solid',
        borderColor: 'smoke',
        pb: 3,
        pl: 3,
      }}>
      <Bounce top>
        <b
          sx={{ fontWeight: 'regular', ':hover': { cursor: 'pointer' } }}
          onClick={() => Open(url)}>
          {Text}
        </b>
      </Bounce>
    </p>
  </div>
)

const Open = (url) => {
  window.open(url, '_self')
}
