/**@jsx jsx*/
import { jsx, BaseStyles } from 'theme-ui'

import ReactMarkdown from 'react-markdown/with-html'
import theme from '@hackclub/theme'
import styled from '@emotion/styled'

export const Styled = styled(BaseStyles)`
  font-size: 1.25rem;

  a {
    word-break: break-word;
  }

  .heading a {
    color: inherit;
    text-decoration: none;
  }

  @media print {
    font-size: 1rem;
    color: black;

    pre,
    code,
    pre code span {
      background-color: ${theme.colors.snow};
      color: black;
      font-size: 1rem !important;
    }

    a {
      color: ${theme.colors.blue};
    }
    a::after {
      content: ' (' attr(href) ') ';
    }
  }
`

export default ({ content, section, slug }) => (
  <>
    <Styled as='article' className='docs'>
      <ReactMarkdown
        source={content}
        escapeHtml={false}
        transformImageUri={(uri) =>
          uri.startsWith('http')
            ? uri
            : `../../content/${section}/${slug}/${uri}`
        }
      />
    </Styled>
  </>
)
