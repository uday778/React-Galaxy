import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
  const {page,handlePageChange,totalPages}=useContext(AppContext)
  return (
    <div className=' border p-6 mb-10 shadow-lg hover:shadow-2xl '>
      <div className='flex justify-between '>
      {
        page>1&&
        <button className='border border-gray-500 p-3'  onClick={()=>handlePageChange(page-1)}>
        Previous
        </button>
      }

      {
        page<totalPages&&
        <button className='border border-gray-500 p-3'  onClick={()=>handlePageChange(page+1)}>
        Next
        </button>
      }

      <p className='border border-gray-500 p-3'  >
      page{page}of{totalPages}
      </p>
      </div>
    </div>
  )
}

export default Pagination
