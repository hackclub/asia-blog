const fs = require('fs')
const matter = require('gray-matter')

const getPosterUrl = (section, filename, forSlug = false) => {
  const basepath = `${process.cwd()}/public/content/${section}/${filename}/img`
  const pngPath = `${basepath}/poster.png`
  const jpgPath = `${basepath}/poster.jpg`
  const jpegPath = `${basepath}/poster.jpeg`
  const basestring = forSlug
    ? `../../content/${section}/${filename}`
    : `content/${section}/${filename}`

  try {
    if (fs.existsSync(pngPath)) return `${basestring}/img/poster.png`
    if (fs.existsSync(jpgPath)) return `${basestring}/img/poster.jpg`
    if (fs.existsSync(jpegPath)) return `${basestring}/img/poster.jpeg`
    else {
      return 'img/noimageavailable'
    }
  } catch (err) {
    console.log(err)
  }
}

const getAllSections = () => fs.readdirSync(`${process.cwd()}/public/content`)

const getBlogSlugs = section =>
  fs.readdirSync(`${process.cwd()}/public/content/${section}`)

const getAllFiles = directoryname => {
  const directory = `./public/content/${directoryname}`
  const filenames = fs.readdirSync(directory)
  return filenames
}

const getFile = (section, filename) => {
  return fs.readFileSync(
    `${process.cwd()}/public/content/${section}/${filename}/README.md`,
    'utf-8'
  )
}

const getBlogContent = mdFile => matter(mdFile).content

const getBlogData = mdFile => {
  const { title, para, author } = matter(mdFile).data
  const content = matter(mdFile).content
  return { title, para, author }
}

const getSectionData = sectioname => {
  const SectionData = []
  const allFiles = getAllFiles(sectioname)

  allFiles.forEach(file => {
    const mdFile = getFile(sectioname, file)
    const { title, para, author } = getBlogData(mdFile)
    const posterurl = getPosterUrl(sectioname, file)
    SectionData.push({ title, author, para, posterurl })
  })
  return SectionData
}

const getJSONData = jsonfilename =>
  JSON.parse(
    fs.readFileSync(`${process.cwd()}/lib/jsondata/${jsonfilename}.json`)
  )

module.exports = {
  getPosterUrl,
  getAllSections,
  getBlogSlugs,
  getAllFiles,
  getFile,
  getBlogContent,
  getBlogData,
  getSectionData,
  getJSONData
}
