/**@jsx jsx*/
import { jsx } from 'theme-ui'
import Sectionintro from '../sectionintro/index'
import BlogPost from './blogpost/index'
import getLabelData from '../../../lib/data/labels/index'

export default ({ data }) => (
  <div
    sx={{
      pl: [4, 5],
      pr: [2, 2, 0],
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
    <Sectionintro
      title={data.title}
      className={data.className}
      isSlidingSection={data.isSlidingSection}
      imgurl={data.imgurl}
      para={data.para}
    />
    {data.data.map((element, index) => (
      <BlogPost
        index={index}
        posterurl={element.posterurl}
        title={element.title}
        author={element.author}
        para={element.para}
        labelurl={getLabelData(element.label).imgurl}
        labelStyles={getLabelData(element.label).styles}
      />
    ))}
  </div>
)

const arr = [1, 2, 3]
