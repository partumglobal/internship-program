'use client'

import React from 'react'

export default function Button({ title, bgcolor}) {
    function handleOnclick(){
    alert("Button Clicked")
  }
  return (
    <button onClick={handleOnclick} className={`px-4 text-white ${bgcolor} rounded-md shadow-md`}>{title}</button>
  )
}


