/***@jsx jsx*/
import { jsx } from 'theme-ui'
import Grid from './grid'
import Card from './card/index'
import getLabelData from '../../../lib/data/labels/index'
import Sectionintro from '../sectionintro/index'
import * as _ from 'ramda'

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
  geturl
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
      columns={_.pipe(getdata, getlength)(data)}
      className={getclassName(data)}
      sx={{
        pt: [4],
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}
    >
      {_.addIndex(_.map)(
        (data, index) => (
          <Card
            index={index}
            posterurl={isBlog ? `../../${data.posterurl}` : data.posterurl}
            title={gettitle(data)}
            author={getauthor(data)}
            para={getpara(data)}
            url={geturl(data) ? geturl(data) : undefined}
            labelimgurl={
              isBlog
                ? `../../${_.pipe(getlabel, getLabelData, getimgurl)(data)}`
                : _.pipe(getlabel, getLabelData, getimgurl)(data)
            }
            customAfterStyle={_.pipe(getlabel, getLabelData, getstyles)(data)}
          />
        ),
        getdata(data)
      )}
    </Grid>
  </div>
)
