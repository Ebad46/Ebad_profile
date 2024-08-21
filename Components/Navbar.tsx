import Image from 'next/image'
import React from 'react'
import styles from "./styler.module.css";
import ToggleButton from './Renav';

const Navbar = () => {
  return (
    <>
    <div className="hidden justify-center md:flex">
      <div className="flex justify-between w-[80%] h-fit items-center">
        <div className="text-4xl">Portfolio</div>
        <div className="">
          <ul className="flex space-x-9">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Contact</li>
            <li className="">Portfolio</li>
          </ul>
        </div>
        <div className=""><div className={styles.isoPro}>
            <section className="text-4xl ">
          <button className='rounded-full p-1 px-6 text-2xl brightness-150 bg-blue-500 hover:brightness-200 hover:shadow-md hover:shadow-blue-500'>Hire Me</button>
            </section>
            <div className={`${styles.text} brightness-200 mt-2 -ml-8 text-3xl`}>Lets build Website`s</div>
          </div>
        </div>
      </div>

    </div>
    <div className="md:hidden right-0 absolute"><ToggleButton/></div>
    </>
  )
}

export default Navbar
