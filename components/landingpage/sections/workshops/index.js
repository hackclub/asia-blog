/**@jsx jsx*/
import { jsx, Box, Text, Grid } from 'theme-ui'
import Card from './card/index'
import * as _ from 'ramda'

export default () => (
  <div
    sx={{
      mt: [4, 5]
    }}
  >
    <div
      sx={{
        pb: [5],
        bg: 'red',
        background: `url(img/patch/topmount.svg),linear-gradient(120.29deg,rgba(235,35,63,0.86),rgba(183,3,28,0.86)),url(img/patch/triangle-pattern.svg)`,
        backgroundRepeat: 'no-repeat,no-repeat,repeat',
        backgroundPosition: [
          'left 0px top -3px,center,center',
          'left 0px top -3px,center,center',
          'left 0px top -3px,center,center',
          'left 0px top -5px,center,center'
        ],
        backgroundSize: [
          '300px,cover,200px',
          '400px,cover,200px',
          '400px,cover,200px',
          '600px,cover,200px'
        ]
      }}
    >
      <Box sx={{ pt: [4], textAlign: 'center' }}>
        <h1
          sx={{
            color: 'white',
            fontSize: ['34px', 5],
            display: 'inline-block',
            pb: [2],
            backgroundImage: ['url(img/patch/underline.svg) '],
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom'
          }}
        >
          New Workshops!
        </h1>
      </Box>
      <Grid
        columns={[1, 1, 2, 3]}
        sx={{
          px: [3, 3, 3, 4],
          pt: [3],
          justifyItems: 'center',
          justifyContent: 'center'
        }}
      >
        {_.map(
          (item, index) => (
            <Card
              index={index}
              rotate={item.rotate}
              imgurl={item.imgurl}
              title={item.title}
              para={item.para}
            />
          ),
          data
        )}
      </Grid>
    </div>
  </div>
)

const data = [
  {
    rotate: '1deg',
    imgurl: 'img/workshops/automation.png',
    title: 'Twitter Automation',
    para: 'Automate almost everything about your twitter account!'
  },
  {
    rotate: '-1deg',
    imgurl: 'img/workshops/dicegame.png',
    title: 'Dice game App',
    para: 'Make a dice game app in react native! And make it awesome'
  },
  {
    rotate: '2deg',
    imgurl: 'img/workshops/hackide.png',
    title: 'Hack IDE',
    para: 'Make and online IDE with the help of HTML,JS and CSS!'
  }
]
