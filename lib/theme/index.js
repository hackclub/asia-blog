import theme from '@hackclub/theme'

const base = {
  ...theme,
  useLocalStorage: false,
  layout: {
    ...theme.layout,
    copy: {
      variant: 'layout.container',
      maxWidth: ['copy', null, 'copyPlus']
    }
  }
}

/**Disable dark mode */
base.useColorSchemeMediaQuery = false
base.colors.modes = {}

export default base
