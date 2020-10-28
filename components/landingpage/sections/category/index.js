/**@jsx jsx*/
import { jsx, Box, Text, Grid, Flex } from 'theme-ui'
import * as _ from 'ramda'

export default () => (
  <Box as="section" sx={{ pl: [4, 5], pr: [2] }}>
    <h1 sx={{ fontSize: [4, 5], mb: [0] }}>Browser by category!</h1>
    <Text sx={{ fontSize: [2, 3] }}>
      Browse this Blog via different categories!
    </Text>{' '}
    <Grid columns={[2, 2, 3, 4]} sx={{ pt: [3, 4] }}>
      {_.map(
        (ele, index) => (
          <ContentElement
            key={index}
            text={ele.text}
            bg={ele.bg}
            background={ele.bggrad}
          />
        ),
        arr
      )}
    </Grid>
  </Box>
)

const ContentElement = ({ text, bg }) => (
  <Flex
    as="a"
    href={
      text ? `/${_.pipe(_.replace('#', ''), _.trim, _.toLower)(text)}` : '#'
    }
    target="blank"
    sx={{
      textDecoration: 'none',
      bg: bg ? bg : 'steel',
      color: 'white',
      height: [100,150],
      borderRadius: [3, 5],
      justifyContent: 'center',
      alignItems: 'center',
      ':hover': {
        transform: 'scale(1.01) ',
        transition: '0.2s',
        textDecorationLine: 'underline'
      }
    }}
  >
    <h2 sx={{ textAlign: 'center', fontSize: [3, 4], wordBreak: 'break-word' }}>
      {text}
    </h2>
  </Flex>
)

const arr = [
  {
    text: '#HQ',
    bg: 'red',
    bggrad: 'linear-gradient(180deg, #FF1334 7.38%, #C90C26 100%)'
  },
  {
    text: '#Events',
    bg: 'purple',
    bggrad: 'linear-gradient(180deg, #B618F8 0%, #8406B8 100%)'
  },
  {
    text: '#Articles',
    bg: 'yellow',
    bggrad: 'linear-gradient(180deg, #FFDB48 0%, #C8A000 100%)'
  },
  {
    text: '#Clubs',
    bg: 'orange',
    bggrad: 'linear-gradient(180deg, #FF9C53 0%, #EB6400 100%)'
  }
]
