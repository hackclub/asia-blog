const fs = require('fs')
const _ = require('ramda')

const { getAllSections,createJSONFile,push } = require('../index')

const sectionfilepath = `${process.cwd()}/lib/jsondata/sectionslugs.json`

const createSlugs = sections => { 
  const map = _.map(section => ({ params: { section } }))
  return map(sections)
}

const createSlugsJson = ()=> {
  const paths = createSlugs(getAllSections())
  return JSON.stringify({ paths })
}


createSlugsFile = () => { 
   _.pipe(createSlugsJson,createJSONFile(sectionfilepath))()
}

createSlugsFile()