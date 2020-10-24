import * as _ from 'ramda'

const push = _.curry((acc, ele) => _.concat(acc, [ele]))

const search = _.curry((propname, prop, data) =>
  _.innerJoin((dataobj, prop) => _.prop(propname)(dataobj) == prop, data, [
    prop
  ])
)

const doesUrlExist = _.has('url')

const setUrl = (sectiondataobj, sectioname) => {
  const urllens = _.lensProp('url')
  const filename = _.prop('filename')(sectiondataobj)
  const obj = doesUrlExist(sectiondataobj)
    ? sectiondataobj
    : _.set(urllens, `./${sectioname}/${filename}`, sectiondataobj)
  return obj
}

const reduceFunction = _.curry((sectionname, data, acc, sectiondataobj) => {
  const objarr = search('filename')(_.prop('filename')(sectiondataobj))(data)
  const mergeobj = _.mergeDeepRight(
    setUrl(sectiondataobj, sectionname),
    _.isEmpty(objarr) ? {} : objarr[0]
  )
  return push(acc)(mergeobj)
})

export default (sectiondata, data, sectionname) => {
  const result = _.reduce(reduceFunction(sectionname)(data))([])(
    _.prop('data')(sectiondata)
  )
  return _.mergeDeepRight(sectiondata, { data: result })
}
