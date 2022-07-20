import { faGithub, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-between items-center bg-th py-1 w-full px-2
    div-on-top'>
        <div className="text-center">
            <a className="rounded-full no-underline mr-1 hover:bg-th" href="https://github.com/abdelhalim97">
                <FontAwesomeIcon icon={faGithub} className="bg-fourth py-1 text-th hover:bg-th hover:text-fourth text-xl rounded-full px-1"/>
            </a>
            <a className="rounded-full no-underline mr-1 hover:bg-th" href="https://www.linkedin.com/in/abdelhalim-ben-oun-31323515a/">
                <FontAwesomeIcon icon={faLinkedin} className="bg-fourth py-1 text-th hover:bg-th hover:text-fourth text-xl rounded-full px-1"/>
            </a>
        </div>
        <div className="text-fourth text-xs md:text-base text-center font-bold">Made by Abdelhalim Ben Oun</div>
            <Link href="/">
                <a>
                    <FontAwesomeIcon icon={faTwitch} className='text-fourth text-2xl hover:text-sec' />
                </a>
            </Link>
    </footer>
  )
}
