/**@jsx jsx*/
import { jsx, Box, Text } from 'theme-ui'
import styled from '@emotion/styled'
import getLabelData from '../../../../lib/data/labels/index'

export default () => (
  <CustomBox
    as='a'
    href='#'
    sx={{
      display: ['block'],
      textDecorationLine: 'none',
      position: 'relative',
      background: 'linear-gradient(138.21deg, #FF7900 39.31%, #FFC800 77.53%)',
      borderRadius: [10],
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      //textAlign: 'center',
      color: 'white',
      maxWidth: [650],
      ':after': {
        width: ['5rem', '6rem'],
        height: ['7rem', '8rem'],
        bottom: ['-4rem'],
        right: ['0rem'],
        backgroundImage: `url(${getLabelData('hackstore').imgurl})`,
      },
      ':hover': {
        transform: 'scale(1.01)',
        transition: '0.2s',
      },
    }}>
    <Box
      sx={{
        //   display: 'inline-block',
        // maxWidth: [500],
        pl: [3, 3, 5],
        pt: [2],
        width: '100%',
      }}>
      <h1
        sx={{
          // display: 'inline-block',
          mb: [0],
          fontSize: [4, '42px', 5],
          lineHeight: '100%',
          ':hover': {
            textDecorationLine: 'underline',
          },
        }}>
        Hack Box Beta Release!
      </h1>
      <Text sx={{ fontSize: [1, 2] }}>- Harsh Bajpai</Text>
    </Box>
    <Box sx={{ pl: [3, 3, 5], pr: [2, 4], pt: [3, 4], pb: [5] }}>
      <Text
        sx={{
          fontSize: [2, 3],
          textAlign: 'start',
          textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
        }}>
        Hack Box beta is finally released, check out this super awesome blog to
        know about it.
      </Text>
    </Box>
  </CustomBox>
)

const CustomBox = styled.div`
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`
