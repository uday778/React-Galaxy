import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'


function Blogdetails({post}) {
   
  return (
    <div className='mt-[50px]'>
      <NavLink to={`/blog/${post.id}`}>
      <span className='text-blue-600 text-xl'>  {post.title} </span>
      </NavLink>
      <p>By
      <span className='text-green-400'>{post.author}</span>On { "  "} 
      <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
      <span className='text-lg text-red-500'>      {post.category}
  </span>
      </NavLink>
      </p>
      <p>Posted on <span>{post.date}</span></p>
      <p>
      {post.content}
      </p>
      <div>
      {post.tags.map((tag,index)=>
        (
            <NavLink key={index}  to={`/tags/${tag.replaceAll(" ","-")}`} >
            <span className='text-purple-500'>
            {`#${tag}`}
            </span></NavLink>
        )
      )}
      </div>
    </div>
  )
}

export default Blogdetails
