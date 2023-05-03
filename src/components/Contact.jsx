import React from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <>
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/5b74cbdd-67c0-43b7-9685-a2bae2da555d" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Get in touch</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            <div className="max-w-screen-xl xl:hidden flex items-center w-full justify-center">
    <ul>
      <li className="w-[160px] h-[60px] flex justify-between items-center">
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://www.linkedin.com/in/samuel-adams-dev/"
        >
          Linkedin <FaLinkedin size={30} />
        </a>
      </li>
      <li className="w-[160px] h-[60px] flex justify-between items-center">
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://github.com/Samthedevman"
        >
          Github <FaGithub size={30} />
        </a>
      </li>
      <li className="w-[160px] h-[60px] flex justify-between items-center">
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="mailto: samueladams@outlook.co.nz"
        >
          Email <HiOutlineMail size={30} />
        </a>
      </li>
      <li className="w-[160px] h-[60px] flex justify-between items-center">
        <a
          className="flex justify-between items-center w-full text-gray-300"
          href="https://drive.google.com/file/d/1HLpyMawSyF18MDDJdkyFkKnin9ijsvQK/view?usp=sharing"
        >
          Resume <BsFillPersonLinesFill size={30} />
        </a>
      </li>
    </ul>
  </div>
        </form>
        
    </div>
 
  </>
  )
}

export default Contact