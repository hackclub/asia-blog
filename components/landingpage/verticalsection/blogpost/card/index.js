/**@jsx jsx*/
import { jsx, Box } from 'theme-ui'
import CardTemplate from '../../../supplementary/cardtemplate/index'

export default ({ posterurl, labelurl, labelStyles }) => (
  <CardTemplate
    as="a"
    href="#"
    sx={{
      display: 'inline-block',
      height: [300, 350],
      position: 'relative',
      bg: 'red',
      mr: [3],
      whiteSpace: 'normal',
      color: 'text',
      textDecoration: 'none',
      borderRadius: [5, 10],
      backgroundImage: `url(${posterurl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      ':hover': {
        transform: 'scale(1.01)',
        transition: '0.2s'
      },
      ':after': {
        width: ['5rem', '6rem'],
        height: ['7rem', '7rem'],
        bottom: ['-3.5rem'],
        right: ['-1rem'],
        transform: 'rotate(10deg)',
        ...labelStyles,
        backgroundImage: `url(${labelurl})`
      }
    }}
  ></CardTemplate>
)
