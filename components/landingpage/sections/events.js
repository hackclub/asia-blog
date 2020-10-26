import SlidingSection from '../slidingsection/index'
import sectiondata from '../../../lib/data/sections/events/index'
import utility from './utility/index'
export default ({ data }) => (
  <SlidingSection data={utility(sectiondata, data, 'events')} mt={true} />
)
