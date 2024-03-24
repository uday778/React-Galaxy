import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import"./Blogs.css"

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
            (<Spinner/>) :

            (
              posts.length === 0 ?
              
                (<div>
                  <p>No Posts found</p>
                </div>) 
                
                : (posts.map((post) => {
                  return(

                    <div key={post.id}>
                    <p className='font-bold text-xs'>{post.title}</p>
                    <p className='text-[10px] '>
                      By
                      <span className='italic'>{post.author}</span>ON <span className='bold underline'>{post.category}</span>
                    </p>
                    <p>posted on {post.date}</p>
                    <p>{post.content}</p>
                    <div>
                    {post.tags.map((tag,index)=>{
                      return <span key={index}>{`#${tag}`}</span>
                    })}
                    </div>
                  </div>
                  )
                }))
            )
        }
      </div>
    </div>
  )
}

export default Blogs
