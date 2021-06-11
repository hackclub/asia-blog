/**@jsx jsx*/
import { jsx, Box } from 'theme-ui'
import Card from './card/index'

export default () => (
  <Box
    as="section"
    sx={{
      //    height: 700,
      pb: [3, 5],
      pt: [4, 4, 5],
      bg: 'steel',
      backgroundImage:
        'url(img/hero/man-blogging.png),url(img/patch/orange-patch.png),url(img/patch/red-patch.png),url(img/hero/hero-background.png)',
      backgroundRepeat: 'no-repeat,no-repeat,no-repeat,repeat',
      backgroundSize: [
        '0px ,250px 250px, 250px 250px, auto',
        '0px ,350px 350px, 350px 350px, auto',
        '600px ,350px 350px, 350px 350px, auto'
      ], //40%
      backgroundPosition: 'right top,right bottom, left top',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <Box sx={{ pl: [4, 5], pr: [2, 2, 0] }}>
      <h1
        sx={{
          color: 'white',
          fontSize: [5, '52px', 6],
          textShadow: [
            '0px 4px 4px rgba(0, 0, 0, 0.25)',
            '0px 4px 4px rgba(0, 0, 0, 0.25)',
            '0px 4px 4px rgba(0, 0, 0, 0.25)',
            'none'
          ]
        }}
      >
        Welcome To <br />
        Hack Club Asia’s Blog
      </h1>
      <Card />
    </Box>
  </Box>
)
