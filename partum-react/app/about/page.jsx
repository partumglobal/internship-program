import Button from '@/components/Button'
import ListUsers from '@/components/ListUsers'
import React from 'react'

const users = [
  {
    id: 1,
  name: "Kwame"
  },
   {
    id: 2,
  name: "Ama"
  },
   {
    id: 3,
  name: "Kofi"
  }
]

export default function About() {



  return (
   <>
     <Button title='Know More'  bgcolor='bg-blue-900' />
    <ListUsers users={users}/>
   </>
  )
}
