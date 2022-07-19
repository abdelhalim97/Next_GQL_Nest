import { faFacebook, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between bg-th py-1 w-full z-50'>
        <div className="text-center ml-3">
            <a className="rounded-full no-underline hover:bg-th" href="https://www.facebook.com/EcolePolytechniqueSousse">
                <FontAwesomeIcon icon={faFacebook} className="bg-fourth text-th hover:bg-th hover:text-fourth text-xl rounded-full px-1"/>
            </a>
            <a className="rounded-full no-underline hover:bg-th" href="https://www.youtube.com/channel/UCJTvyonYu0jhxk2Knr1CYIg/videos">
                <FontAwesomeIcon icon={faYoutube} className="bg-fourth text-th hover:bg-th hover:text-fourth text-xl rounded-full px-1"/>
            </a>
            <a className="rounded-full no-underline hover:bg-th" href="https://twitter.com/PolytecSousse">
                <FontAwesomeIcon icon={faTwitter} className="bg-fourth text-th hover:bg-th hover:text-fourth text-xl rounded-full px-1"/>
            </a>
        </div>
        <div className="text-fourth text-md text-center font-bold">Made by Abdelhalim Ben Oun</div>
        <Link href="/">
            <a>
                <FontAwesomeIcon icon={faTwitch} className='text-sec text-2xl ' />
            </a>
        </Link>
    </div>
  )
}
