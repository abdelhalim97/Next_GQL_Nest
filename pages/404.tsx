import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
  return (
    <div className='w-f flex flex-col justify-center items-center' style={{minHeight:'100vh'}}>
        <h1>Page Not Found</h1>
        <Link href='/'>
            <a>
                <FontAwesomeIcon icon={faHome} className='mx-auto'/>
            </a>
        </Link>
    </div>
  )
}
export default PageNotFound