import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import Blogdetails from '../components/Blogdetails';

function BlogPage() {
  const newBaseUrl="https://codehelp-apis.vercel.app/api/"
  const [blog, setblog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate()
  const { setloading, loading } = useContext(AppContext)
  const blogId = location.pathname.split("/").at(-1);
  async function fetchRelatedBlogs() {
    setloading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("url is ");
    console.log(url);
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log("apiResponse", data);
      setblog(data.blog);
      setRelatedBlogs(data.relatedBlogs)
    } catch (error) {
      console.log("error in Blog id call");
      setblog(null);
      setRelatedBlogs([])
    }
    setloading(false)
  }
  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs()
    }
  }, [location.pathname])
  return (
    <div className='w-10/12 max-w-[1080px] mx-auto'>
      <Header />
      <div>
        <button className='border p-3 mt-2 '
          onClick={() => navigation(-1)}
        >Back
        </button>
      </div>
      {
        loading ?
          (<div>
            <p>
              Loading ...</p></div>) :

          blog ?
            (<div>
              <Blogdetails post={blog} />
              <h2>Realated blogs</h2>
              {
                relatedBlogs.map((post) => {
                  return(
                    <div key={post.id} >
                    <Blogdetails post={post} />
                  </div>
                  )
                  
                })
              }
            </div>) :
            (<div>
              <p>
              No blogs found
              </p>
              </div>)
    }
    </div>
  )
}

export default BlogPage
