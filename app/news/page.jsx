import Footer from '@/components/Footer/Footer'
import Haeder from '@/components/Haeder/Haeder'
import React from 'react'

import s from './page.module.scss'
const page = () => {
  return (
    <div>
    <Haeder/>
    <div className={s.news}>
      
    </div>
    
    <Footer/>
      </div>
  )
}

export default page
