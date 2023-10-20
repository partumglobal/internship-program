import React from 'react'

export const Button = ({text, bgcolor}) => {
  return (
    <button className={`p-4 text-white ${bgcolor} rounded-lg shadow-sm`}>
     {text}
    </button>
  );
}
