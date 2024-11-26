import React from 'react'
import Linkedin from "../assests/linkedin.png"
import Insta from "../assests/instagram.png"
import facebook from "../assests/facebook.png"
import twitter from "../assests/twitter.png"



const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a
         className='hover:opacity-50 transition duration-500 transform hover:scale-125 peer'
         target="_blank"
         href="https://www.linkedin.com/"
         rel='noreferrer'
          >
        <img alt="Linkedin" src={Linkedin}></img>
        </a>
        <a
         className='hover:opacity-50 transition duration-500 transform hover:scale-125 peer'
         target="_blank"
         href="https://www.facebook.com/"
         rel='noreferrer'
          >
        <img alt="Facebook" src = {facebook}></img>
        </a>
        <a
         className='hover:opacity-50 transition duration-500 transform hover:scale-125 peer'
         target="_blank"
         href="https://www.twitter.com/"
         rel='noreferrer'
          >
        <img alt="Linkedin" src ={twitter}></img>
        </a>
        <a
         className='hover:opacity-50 transition duration-500 transform hover:scale-125 peer'
         target="_blank"
         href="https://www.instagram.com/"
         rel='noreferrer'
          >
        <img alt="Linkedin" src = {Insta}></img>
        </a>
    </div>
  )
}

export default SocialMediaIcons