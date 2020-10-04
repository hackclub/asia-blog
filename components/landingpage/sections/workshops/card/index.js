/**@jsx jsx*/

import { jsx, Flex, Box, Text } from 'theme-ui'
import { isVisibleAtMin } from './utility/index'

export default ({ rotate, imgurl, title, para, index }) => (
  <Box
    as='a'
    href='#'
    sx={{
      //    width: [250],
      display: isVisibleAtMin(index)
        ? null
        : ['none', 'none', 'none', 'initial'],
      mt: index == 0 ? [0] : [3, 3, 0],
      backgroundColor: 'transparent',
      textDecoration: 'none',
      transform: [null, null, null, `rotate(${rotate ? rotate : 'none'})`],
      borderRadius: [10],
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      ':hover': {
        transform: 'scale(1.06) rotate(0deg)',
        transition: '0.2s',
      },
    }}>
    <Box
      sx={{
        height: [200],
        borderRadius: ['10px 10px 0px 0px'],

        backgroundImage: `url(${imgurl})`,
        backgroundSize: 'cover',
      }}></Box>
    <Box
      sx={{
        bg: 'white',
        py: [3],
        color: 'text',
        px: [2],
        borderRadius: '0px 0px 10px 10px',
      }}>
      <Text
        sx={{
          fontSize: [2],
          fontWeight: 'heading',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}>
        {title}
      </Text>
      <Text sx={{ fontSize: [1] }}>{para}</Text>
    </Box>
  </Box>
)
