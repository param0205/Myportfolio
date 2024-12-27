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
         href="https://www.linkedin.com/in/paramjeet-singh-9b97641b2/"
         rel='noreferrer'
          >
        <img alt="Linkedin" src={Linkedin}></img>
        </a>
        <a
         className='hover:opacity-50 transition duration-500 transform hover:scale-125 peer'
         target="_blank"
         href="https://www.facebook.com/profile.php?id=100010343406714"
         rel='noreferrer'
          >
        <img alt="Facebook" src = {facebook}></img>
        </a>
        <a
         className='hover:opacity-50 transition duration-500 transform hover:scale-125 peer'
         target="_blank"
         href="https://x.com/Paramjeets87079"
         rel='noreferrer'
          >
        <img alt="Twitter" src ={twitter}></img>
        </a>
        <a
         className='hover:opacity-50 transition duration-500 transform hover:scale-125 peer'
         target="_blank"
         href="https://www.instagram.com/singhparam720/?next=%2F"
         rel='noreferrer'
          >
        <img alt="Instagram" src = {Insta}></img>
        </a>
    </div>
  )
}

export default SocialMediaIcons