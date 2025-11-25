import Navbar from '@/components/Navbar'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

export default function page() {
  return (
    <div>
      dashbord page
      <Navbar />
    </div>
  )
}
