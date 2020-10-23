import SlidingSection from '../slidingsection/index'
import sectiondata from '../../../lib/data/sections/hq/index'
import utility from './utility/index'

export default ({ data }) => {
  
  return <SlidingSection data={utility(sectiondata,data)} />
}
