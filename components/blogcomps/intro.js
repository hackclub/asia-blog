/**@jsx jsx*/

import { jsx, Box, Text, IconButton } from 'theme-ui'
import Authorcomp from '../landingpage/supplementary/authorcomp/index'
import theme from '../../lib/theme/index'

import { ArrowLeft } from 'react-feather'
import Link from 'next/link'

export default ({ heading, posterimgurl }) => (
  <>
    <Box sx={{ mt: [5], pt: [4] }}>
      <Text
        sx={{
          ...theme.text.headline,
          fontSize: [4, '40px'],
          mt: [0],
          pr: [3]
        }}
      >
        {heading}
      </Text>
      {console.log('it is', process.env.REACT_IMAGE_BASE_URL)}
      <Authorcomp author={'Athul Blesson'} isInBlog={true} />
      <img sx={{ maxWidth: '100%', mt: [4] }} src={posterimgurl} />
      {console.log(posterimgurl)}
    </Box>
  </>
)

export const NavButton = ({ color = 'red', sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      color,
      borderRadius: 'circle',
      textDecoration: 'none',
      mr: [3, 4],
      transition: 'box-shadow .125s ease-in-out',
      ':hover,:focus': {
        boxShadow: '0 0 0 2px',
        outline: 'none'
      },
      ...sx
    }}
  />
)

const BackButton = ({ to = '/', text = 'Back' }) => (
  <Link href={to} passHref>
    <NavButton
      as="a"
      title={to === '/' ? 'Back to homepage' : 'Back'}
      sx={{ display: 'flex', width: 'auto', pr: 2, mr: 'auto' }}
    >
      <ArrowLeft />
      {text}
    </NavButton>
  </Link>
)
