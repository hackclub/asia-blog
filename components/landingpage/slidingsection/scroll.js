/**@jsx jsx*/
import { jsx, Flex, Box } from 'theme-ui'
import HackClubIcon from '@hackclub/icons'
import ScrollingUtilityFunction from '../sectionintro/utility/index'

export default ({ isVisible, className, setIsScrolled, setIsAtEnd }) => {
  const { scrollLeft, scrollRight } = ScrollingUtilityFunction(className)

  const callback = glyph => {
    return () => {
      const result = glyph === 'view-forward' ? scrollLeft() : scrollRight()
      setIsScrolled(result.isAtStart)
      setIsAtEnd(result.isAtEnd)
    }
  }

  return (
    <Flex
      sx={{
        position: 'absolute',
        alignItems: 'center',
        display: ['none', 'flex'],
        width: '100%',
        height: '100%',
        zIndex: isVisible ? null : -1,
        transition: '0.4s',
        justifyContent: 'space-between'
      }}
    >
      <Icon isVisible={isVisible} callback={callback} glyph="view-back" />
      <Icon isVisible={isVisible} callback={callback} glyph="view-forward" />
    </Flex>
  )
}

const Icon = ({ glyph, isVisible, callback }) => (
  <Flex
    sx={{
      background: `linear-gradient(to right, transparent, rgba(12,17,27,0.7), rgba(12,17,27,0.9))`,
      background: null,
      bg: 'white',
      zIndex: 1000,
      opacity: isVisible ? 1 : 0,
      alignItems: 'center',
      borderRadius: '50%',
      mx: [2],
      boxShadow:
        glyph == 'view-back' ? '1.5px 0px 3px grey' : '-1.5px 0px 3px grey',
      cursor: 'pointer',
      transition: '0.3s',

      ':hover': {
        transform: 'scale(1.01)',
        transition: '0.2s'
      }
    }}
    onClick={callback(glyph)}
  >
    <HackClubIcon glyph={glyph} sx={{}} size={64} />
  </Flex>
)
