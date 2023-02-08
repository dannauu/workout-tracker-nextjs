import React, {useState} from 'react'
import Link from 'next/Link'

const _Navigation = () => {
  // return (
  //   <div className='flex justify-evenly'>
  //       <Link href='/' className='bg-red-500 rounded p-1'>Home</Link>
  //       <Link href='/monday'>Monday</Link>
  //       <Link href='/tuesday'>Tuesday</Link>
  //       <Link href='/wednesday'>Wednesday</Link>
  //       <Link href='/thursday'>Thursday</Link>
  //       <Link href='/friday'>Friday</Link>
  //     </div>
      
  // )
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-2 py-2 border rounded text-sm leading-5 font-medium focus:outline-none focus:shadow-outline"
        id="options-menu"
        aria-label="Options"
      >
        Choose Day
      </button>
      {isOpen && (
        <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg text-xl">
          <div className="rounded-md bg-white shadow-xs">
            <div className="py-1">
              <Link
                href="/"
                className="text-center block px-4 py-2 italic"
              >
                Home
              </Link>
              <Link
                href="/monday"
                className="text-center block px-4 py-2 italic"
              >
                Monday
              </Link>
              <Link
                href="/tuesday"
                className="text-center block px-4 py-2 italic"
              >
                Tuesday
              </Link>
              <Link
                href="/wednesday"
                className="text-center block px-4 py-2 italic"
              >
                Wednesday
              </Link>
              <Link
                href="/thursday"
                className="text-center block px-4 py-2 italic"
              >
                Thursday
              </Link>
              <Link
                href="/friday"
                className="text-center block px-4 py-2 italic"
              >
                Friday
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default _Navigation