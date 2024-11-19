import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import Feed from '../components/Feed'
import RightSidebar from '../components/RightSidebar'
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