
'use client'
import React, {useState} from 'react'

import Button from '@/components/Button'
import ListUsers from '@/components/ListUsers'
import Navbar from '@/components/Navbar'

const users = [
  {
    id: 1,
    name: "Nii"
  },
  {
    id: 2,
    name: "Gabby"
  },
  {
    id: 3,
    name: "Kofi"
  }
]



export default function Home() {

  const [count, setCount] = useState(0)


  const isLoggedIn = false


  function updateCount (){
    setCount(count + 1)
  }




  return (
    <>
    <Navbar/>
      {/* <div className='p-10 mx-auto max-w-7xl'>
    <button onClick={updateCount}>
      Clicked {count} times
    </button>

        {
          isLoggedIn ?

          <Button  title='Contact Us' bgcolor='bg-red-900' />



            :
            <ul>
              <ListUsers users={users} />
            </ul>
        }
      </div> */}
    </>
  )
}



