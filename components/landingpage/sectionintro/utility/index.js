import { flatMap } from 'lodash'
import { useState, useEffect } from 'react'

export default elementClassName => {
  const [sliderElement, setSliderElement] = useState(null)
  const [prevScroll, setPrevScroll] = useState(0)

  useEffect(() => {
    setSliderElement(
      window.document.getElementsByClassName(elementClassName)[0]
    )

    return () => {}
  }, [])

  const isScrolled = sliderElement =>
    sliderElement.scrollLeft != 0 ? true : false

  const isAtEndFlag = currentScroll =>
    currentScroll != 0 ? (currentScroll == prevScroll ? true : false) : false

  return {
    scrollLeft: () => {
      sliderElement.scrollTo(sliderElement.scrollLeft + 100, 0)
      const isAtEnd = isAtEndFlag(sliderElement.scrollLeft)
      setPrevScroll(sliderElement.scrollLeft)
      return { isAtStart: isScrolled(sliderElement), isAtEnd: isAtEnd }
    },
    scrollRight: () => {
      sliderElement.scrollTo(sliderElement.scrollLeft - 100, 0)
      const isAtEnd = isAtEndFlag(sliderElement.scrollLeft)
      setPrevScroll(sliderElement.scrollLeft)
      return { isAtStart: isScrolled(sliderElement), isAtEnd: isAtEnd }
    }
  }
}
