/**@jsx jsx*/
import { jsx, Flex, Text } from 'theme-ui'
import getProfile from '../../../../lib/data/author/index'

export default ({ author, isInBlog = false, date }) => (
  <Flex sx={{ alignItems: 'center' }}>
    <img
      src={`${getProfile(author)}`}
      sx={{ borderRadius: [200], width: isInBlog ? [35] : [40] }}
    />
    <Text
      sx={{
        pl: isInBlog ? [2] : [3],
        fontSize: isInBlog ? [1] : [2],
        ':hover': { textDecorationLine: isInBlog ? 'none' : 'underline' }
      }}
    >
      - {isInBlog ? (date ? `${date},` : '') : ''} {author}
    </Text>
  </Flex>
)
