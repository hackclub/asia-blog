/***@jsx jsx*/

import { jsx, Flex, Text } from 'theme-ui'
import Card from './card/index'
import data from '../../../lib/data/hq/slidesection/index'

export default () => (
  <div sx={{ pl: [4, 5], pr: [2, 2, 0] }}>
    <div>
      <h1
        sx={{
          fontSize: [5],
          borderBottom: '3px solid rgba(48, 48, 48, 0.125)',
          mr: [5],
          pb: [2],
          mb: [0],
        }}>
        {' '}
        Happenings @ HQ!
      </h1>
      <Flex sx={{ pt: [3], alignItems: 'center' }}>
        <img src='img/labels/hackclubdarklogo.png' sx={{ width: [50] }} />
        <Text sx={{ fontSize: [3], ml: [4] }}>
          Check out the latest stories and events from HQ.
        </Text>
      </Flex>
    </div>
    <div
      sx={{
        pt: [4],
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
      }}>
      {data.map((data, index) => (
        <Card
          index={index}
          posterurl={data.posterurl}
          title={data.title}
          author={data.author}
          para={data.para}
          label={data.label}
        />
      ))}
    </div>
  </div>
)
