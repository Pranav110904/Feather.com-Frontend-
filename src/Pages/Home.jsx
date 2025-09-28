
import LeftSidebar from '../Layouts/LeftSidebar'
import Feed from '../Layouts/Feed'
import RightSidebar from '../Layouts/RightSidebar'
const Home = () => {
  return (
    <div className='w-[66%] mx-auto flex justify-between '>
        <LeftSidebar/>
        <Feed/>
        <RightSidebar/>
    </div>
  )
}

export default Home