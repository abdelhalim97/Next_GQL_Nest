import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Search = () => {
  return (
    <div className='flex justify-center'>
        <input className='bg-fourth rounded-l-md outline-none focus:border focus:border-yellow-600'  />
        <div className='bg-sec rounded-r-md cursor-pointer flex items-center' onClick={()=>console.log('clicked')}>
          <FontAwesomeIcon icon={faSearch} className='text-fourth text-lg px-1'/>
        </div>
    </div>
  )
}
export default Search
