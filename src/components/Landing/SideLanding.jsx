import React from 'react'
import { leftSection } from '../../assets'
function SideLanding() {
  return (
    <img src={leftSection} alt="left" className='hidden md:flex flex-col justify-between fixed top-0 left-0 z-50 w-64 h-full overflow-y-auto bg-[#EFF3FB] text-blue-11 transition-transform'/>
  )
}

export default SideLanding
