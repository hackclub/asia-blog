/**@jsx jsx*/

import { Flex, jsx, Text } from 'theme-ui'
import styled from '@emotion/styled'
import getProfile from '../../../../lib/author/index'

export default ({ index, posterurl, title, author, para, label }) => (
  <div
    sx={{
      width: '400px',
      display: 'inline-block',
      ml: index == 0 ? null : [3],
      mr: [3],
      whiteSpace: 'normal',
    }}>
    <CustomBox
      sx={{
        width: '100%',
        height: '300px',
        position: 'relative',
        bg: 'red',
        borderRadius: [10],
        backgroundImage: `url(img/posters/hq/${posterurl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25))',
        ':after': {
          width: ['5rem', '4.5rem'],
          height: ['7rem', '4.5rem'],
          bottom: ['-1.5rem'],
          right: ['0rem'],
          transform: 'rotate(15deg)',
          backgroundImage: `url(img/labels/${label}.png)`,
        },
      }}></CustomBox>
    <h1 sx={{ mb: [0] }}>{title}</h1>
    <Flex sx={{ alignItems: 'center' }}>
      <img
        src={`img/profiles/${getProfile(author)}`}
        sx={{ borderRadius: [200], width: [40] }}
      />
      <Text sx={{ pl: [3], fontSize: [2] }}>-{author}</Text>
    </Flex>
    <p sx={{ fontSize: [3] }}>{para}</p>
  </div>
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
