/**@jsx jsx*/
import { jsx, Flex, Text } from 'theme-ui'
import getProfile from '../../../../lib/data/author/index'

export default ({ author }) => (
  <Flex sx={{ alignItems: 'center' }}>
    <img
      src={`${getProfile(author)}`}
      sx={{ borderRadius: [200], width: [40] }}
    />
    <Text
      sx={{
        pl: [3],
        fontSize: [2],
        ':hover': { textDecorationLine: 'underline' },
      }}>
      -{author}
    </Text>
  </Flex>
)
