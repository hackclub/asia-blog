import VerticalSection from '../verticalsection/index'
import sectiondata from '../../../lib/data/sections/recents/index'
import utility from './utility/index'

export default ({data}) => <VerticalSection data={utility(sectiondata,data)} />
