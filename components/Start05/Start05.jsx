import React from 'react'
import s from './page.module.scss'
import { Alex_Brush, Be_Vietnam_Pro, Manrope, Mansalva } from "next/font/google";
import Image from 'next/image';

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"],
});

const FontMansalva = Mansalva({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Start05() {
  return (
    <div>Start05</div>
  )
}
