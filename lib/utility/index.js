const fs = require('fs')
const matter = require('gray-matter')
const _ = require('ramda')
const resolveDate = require('@bajpai244/datetime')

const push = _.curry((acc, ele) => _.concat(acc, [ele]))

const doesPropertyExists = _.curry((object, property) =>
  _.pipe(_.keys(), _.includes(property))(object)
)

const getAllSections = () => fs.readdirSync(`${process.cwd()}/public/content`)

const getBlogSlugs = section =>
  fs.readdirSync(`${process.cwd()}/public/content/${section}`)

const getAllFiles = directoryname => {
  const directory = `./public/content/${directoryname}`
  const filenames = fs.readdirSync(directory)
  return filenames
}

const getFile = _.curry((section, filename) => {
  return fs.readFileSync(
    `${process.cwd()}/public/content/${section}/${filename}/README.md`,
    'utf-8'
  )
})

const getBlogContent = mdFile => matter(mdFile).content

const getBlogData = mdFile => {
  const data = matter(mdFile).data
  return { ...data, date: resolveDate(_.prop('date')(data)) }
  //return { title, para, author, date: resolveDate(date) }
}

const getSectionData = sectioname => {
  const allFiles = getAllFiles(sectioname)

  const createSectionData = _.curry((acc, filename) => {
    const mdFile = getFile(sectioname, filename)
    const { title, para, author } = getBlogData(mdFile)
    const posterurl = getPosterUrl(sectioname, filename)
    return push(acc)({ title, author, para, filename, posterurl }) // push(acc)([ { title, author, para, posterurl }])
  })

  const SectionData = _.reduce(createSectionData)([])(allFiles)
  return SectionData
}

const getPosterUrl = _.curry((section, filename, forSlug = false) => {
  const blogdata = _.pipe(getFile, getBlogData)(section, filename)
  const posterimgurlAlreadyExists = doesPropertyExists(blogdata, 'posterimgurl')
  if (posterimgurlAlreadyExists) return _.prop('posterimgurl')(blogdata)

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
})

const getJSONData = jsonfilename =>
  JSON.parse(
    fs.readFileSync(`${process.cwd()}/lib/jsondata/${jsonfilename}.json`)
  )



const createJSONFile = _.curry((path, jsondata) =>
  fs.writeFileSync(path, jsondata)
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
  getJSONData,
  createJSONFile,
  push
}
