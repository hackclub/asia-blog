/***@jsx jsx*/
import { jsx, Grid } from 'theme-ui'
import Card from './card/index'
import getLabelData from '../../../lib/data/labels/index'
import Sectionintro from '../sectionintro/index'
import { map, pipe } from 'ramda'

import {
  getdata,
  getlength,
  gettitle,
  getclassName,
  getisSlidingSection,
  getlabel,
  getimgurl,
  getpara,
  getauthor,
  getstyles,
  getresourceurl
} from './utility/index'

export default ({ data, mt, isBlog = false }) => (
  <div sx={{ pl: [4, 5], pr: [2, 2, 0], mt: mt ? [3] : [0] }}>
    <Sectionintro
      title={gettitle(data)}
      className={getclassName(data)}
      isSlidingSection={getisSlidingSection(data)}
      imgurl={
        getimgurl(data)
          ? isBlog
            ? `../../${getimgurl(data)}`
            : getimgurl(data)
          : null
      }
      para={getpara(data)}
    />
    <Grid
      columns={pipe(getdata, getlength)(data)}
      className={getclassName(data)}
      sx={{
        pt: [4],
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}
    >
      {map(
        (data, index) => (
          <Card
            index={index}
            posterurl={isBlog ? `../../${data.posterurl}` : data.posterurl}
            title={gettitle(data)}
            author={getauthor(data)}
            para={getpara(data)}
            resourceurl={ getresourceurl(data)?getresourceurl(data): undefined } 
            labelimgurl={
              isBlog
                ? `../../${pipe(getlabel, getLabelData, getimgurl)(data)}`
                : pipe(getlabel, getLabelData, getimgurl)(data)
            }
            customAfterStyle={pipe(getlabel, getLabelData, getstyles)(data)}
          />
        ),
        getdata(data)
      )}
    </Grid>
  </div>
)
