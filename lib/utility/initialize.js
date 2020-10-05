import fs from 'fs'
const sections = ['articles']

import { getSectionData } from './index'

const SliceData = (arr, index) => {
  return arr.slice(9)
}

const CreateJSON = () => {
  sections.map((section) => {
    const data = getSectionData(section)
    SliceData(data, index)
  })
}
