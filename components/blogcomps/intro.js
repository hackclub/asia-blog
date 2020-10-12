/**@jsx jsx*/

import { jsx, Box, Text } from 'theme-ui'
import Authorcomp from '../landingpage/supplementary/authorcomp/index'
import theme from '../../lib/theme/index'

export default ({ heading, posterimgurl, author, date }) => (
  <>
    <Box sx={{ mt: [5], pt: [4] }}>
      <Text
        sx={{
          ...theme.text.headline,
          fontSize: [4, '40px'],
          mt: [0],
          pr: [3]
        }}
      >
        {heading}
      </Text>
      <Authorcomp author={author} isInBlog={true} date={date?date:undefined} />
      <img sx={{ maxWidth: '100%', mt: [4] }} src={posterimgurl} alt="blog poster" />
    </Box>
  </>
)
