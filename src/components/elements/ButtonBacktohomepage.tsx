'use client'
import React from 'react'
import Buttonorgi from './Buttons'
import { useRouter } from 'next/navigation'

function Returnhomrpage() {
       const router = useRouter()
  return (
       <Buttonorgi  text="Return to Homepage" onClick={()=>router.push('/')}/>
  )
}

export default Returnhomrpage