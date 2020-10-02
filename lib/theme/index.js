import theme from '@hackclub/theme'

const base = {
  ...theme,
  useLocalStorage: false,
}

/**Disable dark mode */
base.useColorSchemeMediaQuery = false
base.colors.modes = {}

export default base
