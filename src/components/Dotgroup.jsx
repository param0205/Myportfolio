import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Dotgroup = ({selectedPage,setselectedPage}) => {
    const selectedStyles  =`relative bg-yellow before:absolute before:w-6 before:h-6
    before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`
  return (
    <div className='flex flex-col gap-6 fixed top-[50%] right-7'>
    <AnchorLink
      className={`${
       selectedPage ===  'home' ? selectedStyles : "bg-slate-500"}
       w-3 h-3 rounded-full`}
      href="#home"
      onClick={() => setselectedPage('home')}
    >
    </AnchorLink>
    <AnchorLink
      className={`${
       selectedPage ===  'skills' ? selectedStyles : "bg-slate-500"}
       w-3 h-3 rounded-full`}
      href="#skills"
      onClick={() => setselectedPage('skills')}
    >
    </AnchorLink>
    <AnchorLink
      className={`${
       selectedPage ===  'workexp' ? selectedStyles : "bg-slate-500"}
       w-3 h-3 rounded-full`}
      href="#workexp"
      onClick={() => setselectedPage('workexp')}
    >
    </AnchorLink>
    <AnchorLink
      className={`${
       selectedPage ===  'projects' ? selectedStyles : "bg-slate-500"}
       w-3 h-3 rounded-full`}
      href="#projects"
      onClick={() => setselectedPage('projects')}
    >
    </AnchorLink>
    <AnchorLink
      className={`${
       selectedPage ===  'techtiles' ? selectedStyles : "bg-slate-500"}
       w-3 h-3 rounded-full`}
      href="#techtiles"
      onClick={() => setselectedPage('techtiles')}
    >
    </AnchorLink>
    <AnchorLink
      className={`${
       selectedPage ===  'contact' ? selectedStyles : "bg-slate-500"}
        w-3 h-3 rounded-full`}
      href="#contact"
      onClick={() => setselectedPage('contact')}
    >
    </AnchorLink>
   </div>
  )
}

export default Dotgroup