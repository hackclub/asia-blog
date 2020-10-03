/***@jsx jsx*/
import { jsx, Grid } from 'theme-ui'
import Card from './card/index'
import getLabelData from '../../../lib/data/labels/index'
import Sectionintro from '../sectionintro/index'

export default ({ data, mt }) => (
  <div sx={{ pl: [4, 5], pr: [2, 2, 0], mt: mt ? [3] : [0] }}>
    <Sectionintro
      title={data.title}
      className={data.className}
      isSlidingSection={data.isSlidingSection}
      imgurl={data.imgurl}
      para={data.para}
    />
    <Grid
      columns={data.data.length}
      className={data.className}
      sx={{
        pt: [4],
        overflowX: 'auto',
        whiteSpace: 'nowrap',
      }}>
      {data.data.map((data, index) => (
        <Card
          index={index}
          posterurl={data.posterurl}
          title={data.title}
          author={data.author}
          para={data.para}
          labelimgurl={getLabelData(data.label).imgurl}
          customAfterStyle={getLabelData(data.label).styles}
        />
      ))}
    </Grid>
  </div>
)
