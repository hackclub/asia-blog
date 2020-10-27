/**@jsx jsx*/
import { jsx, Grid, Box, Flex, Text } from 'theme-ui'
import Card from './card/index'
import Footer from '../footer/index'

export default ({ title, desc, data,sectionname }) => (
  <>
    <Box
      sx={{
        pl: [4, 5],
        pr: [2, 2, 0],
        mt: [5],
        mb: [5],
        backgroundImage: [
          'none',
          'url(img/patch/section-patch.svg)',
          'url(img/patch/section-patch.svg)',
          'url(img/patch/section-patch-2.svg) , url(img/patch/section-patch.svg)'
        ],

        backgroundRepeat: 'no-repeat',
        backgroundPosition: [
          'left -450px top -80px',
          'left -400px top -20px',
          'left -400px top -20px',
          'right -450px bottom 80px , left -420px top -120px'
        ],
        backgroundSize: ['800px', '800px', 'default,800px', 'default,800px']
      }}
    >
      <Flex sx={{ alignItems: 'end' }}>
        <img src="img/labels/blog.png" sx={{ height: [60] }} />
        <h1
          sx={{ ml: [3], fontSize: [5], flex: 1, mb: [0], lineHeight: '120%' }}
        >
          {title}
        </h1>
      </Flex>
      <Text sx={{ fontSize: [2, 3], mt: [2], ml: [1] }}>{desc}</Text>
      <Grid columns={[1, 1, 2, 3]} sx={{ mt: [4] }}>
        {data.map((item, index) => (
          <Card
            index={index}
            title={item.title}
            sectionname={sectionname}
            posterurl={item.posterurl}
            author={item.author}
            para={item.para}
            filename={item.filename}
          />
        ))}
      </Grid>
    </Box>
    <Footer />
  </>
)
