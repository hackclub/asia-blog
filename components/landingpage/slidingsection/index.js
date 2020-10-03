/***@jsx jsx*/
import { useState } from 'react'
import { jsx, Grid } from 'theme-ui'
import Card from './card/index'
import data from '../../../lib/data/slidesection/hq/index'
import getLabelData from '../../../lib/data/labels/index'
import Sectionintro from '../sectionintro/index'

export default () => (
  <div sx={{ pl: [4, 5], pr: [2, 2, 0] }}>
    <Sectionintro
      title=' Happenings @ HQ!'
      className='hqsection'
      isSlidingSection={true}
      imgurl='img/labels/hackclubdarklogo.png'
      para='Check out the latest stories and events from HQ.'
    />
    <Grid
      columns={data.length}
      className={'hqsection'}
      sx={{
        pt: [4],
        overflowX: 'auto',
        whiteSpace: 'nowrap',
      }}>
      {data.map((data, index) => (
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
