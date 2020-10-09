/**@jsx jsx*/
import { jsx, Box, Text, Grid, Flex } from 'theme-ui'
export default () => (
  <Box as="section" sx={{ pl: [4, 5], pr: [2] }}>
    <h1 sx={{ fontSize: [4, 5], mb: [0] }}>Browser by category!</h1>
    <Text sx={{ fontSize: [2, 3] }}>
      Browse this Blog via different categories!
    </Text>{' '}
    <Grid columns={[2, 2, 3, 4]} sx={{ pt: [3, 4] }}>
      {arr.map(ele => (
        <ContentElement text={ele.text} bg={ele.bg} background={ele.bggrad} />
      ))}
    </Grid>
  </Box>
)

const ContentElement = ({ text, bg, background }) => (
  <Flex
    as="a"
    href="#"
    sx={{
      textDecoration: 'none',
      bg: bg ? bg : 'steel',
      // background: background ? background : null,
      color: 'white',
      height: [150],
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

const arr1 = [
  '#Programming',
  '#Courses',
  '#Books',
  '#Khan Academy',
  '#Music',
  '#Graphics',
  '#Workshops',
  '#Operating System'
]

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
  } /*
  {
    text: '#Workshops',
    bg: 'green',
    bggrad: 'linear-gradient(180deg, #16EDAE 0%, #16BA8A 100%)',
  },
  {
    text: '#AMA',
    bg: 'steel',
    bggrad: 'linear-gradient(180deg, #3C5F89 0%, #212D3C 100%)',
  },
  {
    text: '#Scrapbook',
    bg: 'blue',
    bggrad: 'linear-gradient(180deg, #4A9BDE 0%, #145891 100%)',
  },
  {
    text: '#Slack',
    bg: 'cyan',
    bggrad: ' linear-gradient(180deg, #38C1EA 0%, #06789A 100%)',
  },*/
]

/*
const arr = [
  {
    text: '#Programming',
    bg: 'red',
    bggrad: 'linear-gradient(180deg, #FF1334 7.38%, #C90C26 100%)',
  },
  {
    text: '#Courses',
    bg: 'purple',
    bggrad: 'linear-gradient(180deg, #B618F8 0%, #8406B8 100%)',
  },
  {
    text: '#Books',
    bg: 'yellow',
    bggrad: 'linear-gradient(180deg, #FFDB48 0%, #C8A000 100%)',
  },
  {
    text: '#Khan Academy',
    bg: 'orange',
    bggrad: 'linear-gradient(180deg, #FF9C53 0%, #EB6400 100%)',
  },
  {
    text: '#Music',
    bg: 'green',
    bggrad: 'linear-gradient(180deg, #16EDAE 0%, #16BA8A 100%)',
  },
  {
    text: '#Graphics',
    bg: 'steel',
    bggrad: 'linear-gradient(180deg, #3C5F89 0%, #212D3C 100%)',
  },
  {
    text: '#Workshops',
    bg: 'blue',
    bggrad: 'linear-gradient(180deg, #4A9BDE 0%, #145891 100%)',
  },
  {
    text: '#Operating System',
    bg: 'cyan',
    bggrad: ' linear-gradient(180deg, #38C1EA 0%, #06789A 100%)',
  },
]
*/
