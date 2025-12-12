import { ArrowRight } from 'lucide-react'
import React from 'react'

const ConnectButton = () => {
  return (
    <button className="cursor-pointer px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-3 border backdrop-blur-2xl bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
      <span className="group-hover:translate-x-1 transition-transform duration-300">Let's Connect</span>
      <span className="relative">
        <ArrowRight className='group-hover:translate-x-1 transition-transform duration-300' />
      </span>
    </button>
  )
}

export default ConnectButton
