const fs = require('fs')
const _ = require('ramda')

const { getAllSections, getBlogSlugs, createJSONFile } = require('../index')

const createSectionPaths = section => {
 const map = _.map(slug => ({ params: { section, slug } }))
 return _.pipe(getBlogSlugs,map)(section)
}

const createAllSlugs = sectionpaths => {
  const paths = []
  _.forEach(element => _.forEach(ele => paths.push(ele), element), sectionpaths)
  return paths
}

const createSlugsJson = sections => {
  const paths = _.pipe(_.map,createAllSlugs)(createSectionPaths, sections) 
  return JSON.stringify({ paths })
}

const createSlugsFile = () => {
  _.pipe(getAllSections,createSlugsJson, createJSONFile)()
}

createSlugsFile()
