import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuNav from '../nav-components/menu-nav'
import Search from '../nav-components/search'
import SignIn from '../nav-components/signin/signin'
import SignUp from '../nav-components/signup/signup'

 const Nav = () => {
  const [openSignupModal, setOpenSignupModal] = useState<boolean>(false)
  const [openSiginModal, setOpenSigninModal] = useState<boolean>(false)
  const [state, setState] = useState(false)
  const navigation = [
      { id:0, title: "Following", path: "/directory/following" },
      { id:1, title: "Browse", path: "/directory" },
  ]

  return (
    <header className="bg-st w-full md:static z-50 fixed">
    <nav className="items-center mx-auto md:flex h-full">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <a>
                <FontAwesomeIcon icon={faTwitch} className='text-fourth hover:text-sec text-2xl ml-2'/>
                </a>
              </Link>
            <div className="md:hidden">
                <button className="text-sec outline-none p-2 rounded-md"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
        <div className={`flex-1 justify-center w-full pb-3 mt-8 md:flex md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
            <ul className="md:flex justify-around items-center space-y-8 md:space-x-6 md:space-y-0 md:w-5/6 ml-0 ">
            <div className='md:ml-6 ml-0 md:w-3/12 lg:w-1/5 w-full items-center block md:flex justify-between'>
                {
                          navigation.map((item) => {
                              return (
                                <li key={item.id} className="text-fourth hover:text-sec grid justify-center">
                                    <Link href={item.path}>
                                        <a className={`font-bold ${item.id===0 && 'md:mr-3 mt-0 '} ${item.id!==0 && 'md:mt-0 mt-5 '}`}>
                                        {item.title}
                                        </a>
                                    </Link>
                                </li>
                              )
                          })
                      }
            </div>
            <Search/>
            <div></div>
            </ul>
            <div className='flex flex-col md:flex-row md:w-2/6 mt-8 md:mt-0  justify-around w-4/6 mx-auto'>
              <Button className='bg-th text-fourth hover:bg-sec text-md px-2 rounded-sm' onClick={()=>setOpenSignupModal(true)}>Sign up</Button>
              <SignUp openSignupModal={openSignupModal} setOpenSigninModal={setOpenSigninModal} setOpenSignupModal={setOpenSignupModal}/>
              <Button className='bg-sec text-fourth hover:bg-sec text-md px-2 rounded-sm' onClick={()=>setOpenSigninModal(true)}>Sign in</Button>
              <SignIn openSiginModal={openSiginModal} setOpenSignupModal={setOpenSignupModal} setOpenSigninModal={setOpenSigninModal}/>
              <div className='mx-auto md:mx-0'><MenuNav/></div>
            </div>
        </div>
    </nav>
</header>
  )
}
export default Nav
