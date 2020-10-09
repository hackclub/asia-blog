const fs = require('fs')
const _ = require('ramda')

const { getAllSections, getBlogSlugs } = require('../index')

const createSectionPaths = section =>
    _.map(slug => ({ params: { section, slug } }),getBlogSlugs(section))
  
 //   getBlogSlugs(section).map(slug => ({ params: { section, slug } }))

const createAllSlugs = sectionpaths => {
  const paths = []
   _.forEach(element => _.forEach((ele) => paths.push(ele),element),sectionpaths)
  return paths
}

const createSlugsJson = sections => {
  const paths = createAllSlugs(sections.map(createSectionPaths))
  return JSON.stringify({ paths })
}

const createSlugsFile = () => {
  fs.writeFileSync(
    `${process.cwd()}/lib/jsondata/blogsectionslugs.json`,
    createSlugsJson(getAllSections())
  )
}

createSlugsFile()
