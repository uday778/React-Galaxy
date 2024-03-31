import React from 'react'

function Product({post}) {
  return (
    <div>
    <div>
    <div>
      <p>{post.title}</p>
    </div>
    <div>
      <p>{post.description}</p>
    </div>
    <div>
      <img src={post.image} />
    </div>
    <div>
      <p>{post.price}</p>
    </div>
    
    
  </div>
    </div>
  )
}

export default Product
