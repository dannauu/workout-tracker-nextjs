import React from 'react'
import Link from 'next/Link'

const _Navigation = () => {
  return (
    <div className='flex justify-evenly'>
        <Link href='/' className='bg-red-500 rounded p-1'>Home</Link>
        <Link href='/monday'>Monday</Link>
        <Link href='/tuesday'>Tuesday</Link>
        <Link href='/wednesday'>Wednesday</Link>
        <Link href='/thursday'>Thursday</Link>
        <Link href='/friday'>Friday</Link>
      </div>
      
  )
}

export default _Navigation