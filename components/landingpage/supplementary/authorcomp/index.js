/**@jsx jsx*/
import { jsx, Flex, Text } from 'theme-ui'
import getProfile from '../../../../lib/data/author/index'

export default ({ author, isInBlog = false }) => (
  <Flex sx={{ alignItems: 'center' }}>
    <img
      src={`${getProfile(author)}`}
      sx={{ borderRadius: [200], width: isInBlog ? [35] : [40] }}
    />
    <Text
      sx={{
        pl: isInBlog ? [2] : [3],
        fontSize: isInBlog ? [1] : [2],
        ':hover': { textDecorationLine: 'underline' },
      }}>
      - {isInBlog ? '6th Oct 2020,' : ''} {author}
    </Text>
  </Flex>
)
