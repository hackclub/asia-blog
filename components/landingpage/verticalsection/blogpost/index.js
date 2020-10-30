/**@jsx jsx*/
import { jsx, Box, Grid, Text, Button } from 'theme-ui'
import Card from './card/index'
import AuthorComp from '../../supplementary/authorcomp/index'
import styled from '@emotion/styled'

export default ({
  index,
  title,
  posterurl,
  author,
  para,
  labelurl,
  labelStyles,
  url
}) => (
  <Grid
    columns={[1, 1, 1, 2]}
    sx={{
      mt: index == 0 ? [4] : [4, 5],
      px: [0, 0, 5]
    }}
  >
    <Card
      url={url}
      posterurl={posterurl}
      labelurl={labelurl}
      labelStyles={labelStyles}
    />
    <Box sx={{ px: [0, 0, 0, 4], mt: [3, 3, 3, 0], alignSelf: 'center' }}>
      <Box>
        <Customh1
          as="a"
          href="#"
          sx={{
            display: 'block',
            fontWeight: 'bold',
            fontSize: ['2em'],
            mb: [1, 2],
            lineHeight: 'heading',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            textDecoration: 'none',
            color: 'text',
            ':hover': { textDecorationLine: 'underline' }
          }}
        >
          {title}
        </Customh1>
        <AuthorComp author={author} />
        <Text sx={{ fontSize: [2, 3], mt: [4] }}>{para}</Text>
      </Box>
      <Box sx={{ textAlign: 'center', mt: [3] }}>
        <Button
          as="a"
          href={url ? url : null}
          sx={{ borderRadius: [10], px: [4], py: [2], fontSize: [2] }}
        >
          READ!
        </Button>
      </Box>
    </Box>
  </Grid>
)

const Customh1 = styled.h1``
