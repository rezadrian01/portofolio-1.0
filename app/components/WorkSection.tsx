import React from 'react'
import ProjectCarousel from './ProjectCarousel'
import { PROJECTS } from '@/data/projects'
import GradientText from '@/components/GradientText'

const WorkSection = () => {
  return (
    <section className='relative w-full min-h-dvh border flex flex-col items-center justify-center px-6 md:px-14 lg:px-56 text-center py-20'>
      <header>
        <h2 className='font-thin text-3xl md:text-5xl mb-2 md:mb-4'>Feature Case Study</h2>
        <h3 className='font-semibold text-4xl md:text-6xl mb-4 md:mb-6'>Currently {" "}
          <GradientText
            colors={["#40FFAA", "#235DF3", "#40FFAA", "#235DF3", "#40FFAA"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Work
          </GradientText>
        </h3>
        <p className='font-thin text-base md:text-xl mb-6 md:mb-8'>This is some of my projects that I have done and currently working on. <br />Let's start collaboration  now.</p>
        <button className='cursor-pointer px-6 md:px-8 py-3 md:py-4 rounded-full border backdrop-blur-2xl bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300'>
          More Info
        </button>
      </header>
      <ProjectCarousel projects={PROJECTS} />
    </section>
  )
}

export default WorkSection
