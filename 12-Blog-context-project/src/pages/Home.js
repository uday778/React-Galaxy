import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

function Home() {
  return (
    <div className='w-10/12  max-w-[1080px] mx-auto '>
      <Header/>
      <div>
      <Blogs />
      <Pagination/>
      </div>
    </div>
  )
}

export default Home
