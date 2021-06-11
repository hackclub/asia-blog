/**@jsx jsx*/

import { jsx, Grid } from 'theme-ui'
import Header from '../components/header/index'
import Intro from '../components/team/Introduction/index'
import Card from '../components/team/card'
import Footer from '../components/footer/index'

export default () => (
  <>
    <Header />
    <Intro />
    <Grid columns={[1, 1, 2]} sx={{ pb: 4, mt: [4, 5] }}>
      <Card
        url={
          'https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/auhtors/athul.jpg'
        }
        name="Athul Blesson"
        position="Regional Director at Hack Club"
      />
      <Card
        url={
          'https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/auhtors/annlee.jpg'
        }
        name="Annlee Fores"
        position="COO at Hack Club APAC"
      />
      <Card
        url={
          'https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/auhtors/harsh.png'
        }
        name="Harsh Bajpai"
        position="Community/Tech at Hack Club APAC"
      />
      <Card
        url={'./team/anna.jpeg'}
        name="Anna Grace Benny"
        position="Content & Social media at Hack Club APAC"
      />
      <Card
        url={'./team/shubhangi.jpeg'}
        name="Shubhangi Gupta"
        position="Intern at Hack Club APAC"
      />
    </Grid>
    <Footer />
  </>
)
