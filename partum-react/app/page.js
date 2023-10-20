import Image from 'next/image'

import {Button} from '../components/Button'






export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className='mb-6'>HELLO WORLD</div>

    <Button text='Know More' bgcolor='bg-green-900' />
     <Button text='CLICK ME' bgcolor='bg-red-900'  />

    </main>
  )
}
