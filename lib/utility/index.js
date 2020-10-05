import fs from 'fs'
import matter from 'gray-matter'
import mardownToHrml from '@hackclub/markdown'
import { trim } from 'lodash'
import sections from '../../components/sections'

export const getPosterUrl = (section, filename) => {
  const basepath = `${process.cwd()}/public/content/${section}/${filename}/img`
  const pngPath = `${basepath}/poster.png`
  const jpgPath = `${basepath}/poster.jpg`
  const jpegPath = `${basepath}/poster.jpeg`

  try {
    if (fs.existsSync(pngPath))
      return `content/${section}/${filename}/img/poster.png`
    if (fs.existsSync(jpgPath))
      return `content/${section}/${filename}/img/poster.jpg`
    if (fs.existsSync(jpegPath))
      return `content/${section}/${filename}/img/poster.jpeg`
  } catch (err) {
    console.log(err)
  }
}

export const getAllFiles = (directoryname) => {
  const directory = `./public/content/${directoryname}`
  const filenames = fs.readdirSync(directory)
  return filenames
}

export const getFile = (section, filename) => {
  return fs.readFileSync(
    `${process.cwd()}/public/content/${section}/${filename}/README.md`,
    'utf-8'
  )
}

export const getSectionData = (sectioname) => {
  const SectionData = []
  const allFiles = getAllFiles(sectioname)

  allFiles.map((file) => {
    const mdFile = getFile(sectioname, file)
    const { title, para, author } = matter(mdFile).data
    const posterurl = getPosterUrl(sectioname, file)
    SectionData.push({ title, author, para, posterurl })
  })
  return SectionData
}
