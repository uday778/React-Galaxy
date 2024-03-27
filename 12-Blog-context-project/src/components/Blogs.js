import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import "./Blogs.css"
import Blogdetails from './Blogdetails'

function Blogs() {
  ///consume
  const { posts, loading } = useContext(AppContext)
  console.log("printing inside blogs component");
  console.log(posts);
  return (
    <div>
      <div className='w-11/12 max-w-[450px] py-3 flex flex-col gap-y-7'>
        {
          loading ?
            (<Spinner />) :

            (
              posts.length === 0 ?
                (<div>
                  <p>No Posts found</p>
                </div>)   :
                
                (posts.map((post) => (
                    <Blogdetails key={post.id} post={post} />
                )))
            )
        }
      </div>
    </div>
  )
}

export default Blogs
