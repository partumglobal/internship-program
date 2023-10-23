import React from 'react'
import ListUsers from './ListUsers'
import Button from './Button'

const navs =[
    {
        title : "Home",
        href  : "/"
    },
     {
        title : "About",
        href  : "/about"
    },
     {
        title : "Contact",
        href  : "/contact"
    }
]

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-6 text-white bg-zinc-900'>
        {/* LOGO */}
      <div className='flex items-center gap-x-10'>
          <h1 className='text-3xl text-blue-800'>LOGO</h1>
          <ListUsers data={navs}/>
      </div>
      <Button title='Login' bgcolor='bg-blue-900'/>

    </nav>
  )
}
