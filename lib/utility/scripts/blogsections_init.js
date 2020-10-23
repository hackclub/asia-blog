const fs = require('fs')
const _ = require('ramda')

const {
  getAllSections,
  getBlogSlugs,
  createJSONFile,
  push
} = require('../index')

const blogfilepath = `${process.cwd()}/lib/jsondata/blogsectionslugs.json`

const createSectionPaths = section => {
  const map = _.map(slug => ({ params: { section, slug } }))
  return _.pipe(getBlogSlugs, map)(section)
}

const createAllSlugs = sectionpaths => {
  const fn = _.curry((acc, cur) => _.reduce(push)(acc)(cur))
  const paths = _.reduce(fn, [], sectionpaths)
  return paths
}

const createSlugsJson = sections => {
  const paths = _.pipe(_.map, createAllSlugs)(createSectionPaths, sections)
  return JSON.stringify({ paths })
}

const createSlugsFile = () => {
  _.pipe(getAllSections, createSlugsJson, createJSONFile(blogfilepath))()
}

createSlugsFile()
