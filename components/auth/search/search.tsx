import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TextField   } from '@mui/material'
import React from 'react'

export const Search = () => {
  return (
    <div className='flex content-center	'>
        <TextField label="" variant="outlined" color="secondary" className='bg-fourth rounded-l-md outline-none' size='small' />
        <div className='bg-sec  rounded-r-md cursor-pointer flex items-center'>
          <FontAwesomeIcon icon={faSearch} className='text-fourth text-2xl'/>
        </div>
    </div>
  )
}
