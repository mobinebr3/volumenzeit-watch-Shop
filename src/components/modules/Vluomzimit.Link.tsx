'use client'

import Link from 'next/link'

import CubeARicon from '../icons/CubeARicon'

function VluomzimitLink() {
  return (
       <Link
       href="https://www.volumenzeit.com/build/"
       replace={false}
       target="_blank"
       rel="noopener noreferrer"
       className="border-1 rounded-md border-black  flex items-center justify-center w-full mt-6 py-3 text-black text-[14px]  "
     >
       {" "}
       <CubeARicon /> <p className="ml-2"> Try on in AR Online</p>
     </Link>
  )
}

export default VluomzimitLink