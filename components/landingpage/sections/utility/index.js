import * as _ from 'ramda'

const push = _.curry((acc, ele) => _.concat(acc, [ele]))

const search = _.curry(
    (filename,data) => _.innerJoin((dataobj,filename) => dataobj.filename == filename,data,[filename])
)

const reduceFunction = _.curry( ( data ,acc, sectiondataobj ) => {
  
      const objarr = search(_.prop('filename')(sectiondataobj), data)  
      const mergeobj = _.mergeDeepRight(sectiondataobj, _.isEmpty(objarr) ?{} : objarr[0])
      return push(acc)(mergeobj)
     }

)

export default (sectiondata, data) => {
  const result =   _.reduce(reduceFunction(data))([])(sectiondata.data)
  return _.mergeDeepRight(sectiondata,{data:result}) 
}
 