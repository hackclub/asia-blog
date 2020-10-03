/**@jsx jsx*/
import { jsx, Flex, Text } from 'theme-ui'
import { useState } from 'react'
import ScrollingUtilityFunction from './utility/index'

export default ({ title, className, isSlidingSection, para, imgurl }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAtEnd, setIsAtEnd] = useState(false)
  const { scrollLeft, scrollRight } = ScrollingUtilityFunction(className)

  return (
    <>
      <Flex
        sx={{
          borderBottom: '3px solid rgba(48, 48, 48, 0.125)',
          mr: [1, 5],
        }}>
        <h1
          sx={{
            fontSize: [4, 5],
            // mr: [1, 5],
            pb: [2],
            mb: [0],
          }}>
          {title}
        </h1>
        <Flex
          sx={{
            flex: 1,
            flexDirection: 'row-reverse',
            alignItems: 'end',
            mb: [4],
            display: isSlidingSection ? ['none', 'none', 'flex'] : 'none',
          }}>
          <FrontArrow
            callback={() => {
              const result = scrollLeft()
              setIsScrolled(result.isAtStart)
              setIsAtEnd(result.isAtEnd)
            }}
            isAtEnd={isAtEnd}
          />
          <BackArrow
            callback={() => {
              const result = scrollRight()
              setIsScrolled(result.isAtStart)
              setIsAtEnd(result.isAtEnd)
            }}
            isAtStart={isScrolled}
          />
        </Flex>
      </Flex>
      <Flex
        sx={{
          pt: [3],
          alignItems: ['center'],
          flexDirection: ['row'],
        }}>
        <img
          src={imgurl}
          sx={{
            width: [50],
            display: imgurl ? ['none', 'initial'] : 'none',
          }}
        />
        <Text sx={{ fontSize: [2, 3], ml: [0, 4] }}>{para}</Text>
      </Flex>
    </>
  )
}
const FrontArrow = ({ callback, isAtEnd }) => (
  <svg
    width='38'
    height='25'
    viewBox='0 0 38 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    sx={{
      ml: [4],
      display: ['none', 'none', 'initial'],
      cursor: 'pointer',
      path: { fill: isAtEnd ? '#828282' : '#3F3F3F' },
    }}
    onClick={() => {
      callback()
    }}>
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M24.4038 0.275109C23.4059 -0.295719 22.133 0.0501108 21.5621 1.0501C20.9913 2.04801 21.3371 3.32092 22.3371 3.89174C25.5746 5.73756 28.6516 7.91046 31.4141 10.4167H2.53729C1.3873 10.4167 0.453979 11.35 0.453979 12.5C0.453979 13.65 1.3873 14.5833 2.53729 14.5833H31.4141C28.6516 17.0895 25.5746 19.2624 22.3371 21.1083C21.3371 21.6791 20.9913 22.952 21.5621 23.9499C22.133 24.9499 23.4059 25.2957 24.4038 24.7249C28.9037 22.1478 34.5266 18.7124 37.3974 14.1812C37.5557 13.9312 37.9536 13.2833 37.9536 12.5C37.9536 11.7167 37.5557 11.0688 37.3974 10.8188C34.4745 6.20422 29.0204 2.91884 24.4038 0.275109Z'
      fill='#3F3F3F'
    />
  </svg>
)

const BackArrow = ({ callback, isAtStart }) => {
  return (
    <svg
      width='38'
      height='25'
      viewBox='0 0 38 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      sx={{
        ml: [4],
        display: ['none', 'none', 'initial'],
        path: { fill: isAtStart ? '#3F3F3F' : '#828282' },
        cursor: 'pointer',
      }}
      onClick={() => {
        callback()
      }}>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M14.0479 0.275109C15.0458 -0.295719 16.3187 0.0501107 16.8895 1.0501C17.4604 2.04801 17.1145 3.32092 16.1145 3.89174C12.8771 5.73756 9.80002 7.91046 7.03754 10.4167H35.9144C37.0644 10.4167 37.9977 11.35 37.9977 12.5C37.9977 13.65 37.0644 14.5833 35.9144 14.5833H7.03754C9.80002 17.0895 12.8771 19.2624 16.1145 21.1083C17.1145 21.6791 17.4604 22.952 16.8895 23.9499C16.3187 24.9499 15.0458 25.2957 14.0479 24.7249C9.54794 22.1478 3.92507 18.7124 1.05427 14.1812C0.895935 13.9312 0.498021 13.2833 0.498021 12.5C0.498021 11.7167 0.895935 11.0688 1.05427 10.8188C3.97716 6.20422 9.43127 2.91884 14.0479 0.275109V0.275109Z'
      />
    </svg>
  )
}
