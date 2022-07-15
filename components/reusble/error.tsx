import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
type Props = {
  error?:any,
}
export const Error = ({error}:Props) => {
  return (
    <p className='text-red-500  mt-3'>
      <FontAwesomeIcon  icon={faTriangleExclamation} /> &nbsp;
      {error}
    </p>
  )
}
