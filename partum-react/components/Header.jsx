import { Button } from './Button'
import Link from 'next/link'
import React from 'react'

const nav_item = [
    {
        id: 1,
        title : 'Home',
        href: '/'
    },
     {
        id: 2,
        title : 'About',
        href: '/about'
    },
     {
        id: 3,
        title : 'Contact',
        href: '/contact'
    },
]
export default function Header() {
  return (
    <div> <header class="flex items-center justify-between py-4 md:py-8">

      <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        Flowrift
      </a>

      <nav class="hidden gap-12 lg:flex">

        {
            nav_item.map((item, i) => {
                return(

                    <Link key={i} href={item.href} class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">{item.title}</Link>


                )
            })
        }


      </nav>

      <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
          <Button text='Sign Up' bgcolor='bg-blue-400' />

          <Button text='Sign Up' bgcolor='bg-blue-400' />
      </div>



    </header></div>
  )
}
