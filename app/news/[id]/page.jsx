import React from 'react'
import s from './page.module.scss'
import Haeder from '@/components/Haeder/Haeder';
import Footer from '@/components/Footer/Footer';

const page = ({ id }) => {
  console.log(id);
  return (
    <div className={s.news}>
      <Haeder />
      <div className={s.}>
      </div>
      <Footer />
    </div>
  )
}

export default page
