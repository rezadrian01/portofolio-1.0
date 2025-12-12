'use client'

import React, { useEffect, useRef } from 'react'
import { SKILLS_TITLE, SKILLS_DESC, SKILLS } from '@/data/skills'
import GradientText from '@/components/GradientText'
import SpotlightCard from '@/components/SpotlightCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const SkillSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  // Split skills into two columns
  const midPoint = Math.ceil(SKILLS.length / 2)
  const firstColumnSkills = SKILLS.slice(0, midPoint)
  const secondColumnSkills = SKILLS.slice(midPoint)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Animate description
      gsap.from(descRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className='relative w-full min-h-dvh border flex items-center justify-center px-6 md:px-14 lg:px-56 py-20'
    >

      {/* Content */}
      <div className='relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
        {/* Left Side - Title Section */}
        <div className='text-center lg:text-left'>
          <h2 ref={titleRef} className='text-2xl md:text-3xl font-light text-gray-400 mb-4'>
            {SKILLS_TITLE}
          </h2>
          <h3 ref={subtitleRef} className='text-4xl md:text-6xl font-bold mb-6'>
            My Tech{' '}
            <GradientText
              colors={["#40FFAA", "#235DF3", "#40FFAA", "#235DF3", "#40FFAA"]}
              animationSpeed={3}
              showBorder={false}
            >
              Stack
            </GradientText>
          </h3>
          <p ref={descRef} className='text-base md:text-xl text-gray-300'>
            {SKILLS_DESC}
          </p>
        </div>

        {/* Right Side - Scrolling Skills */}
        <div className='relative h-[80dvh] overflow-hidden'>
          {/* Fade overlay - Top */}
          <div className='absolute top-0 left-0 right-0 h-40 z-10 pointer-events-none'>
            <div className='absolute inset-0 bg-linear-to-b from-black via-black/60 to-transparent' />
            <div className='absolute inset-0 backdrop-blur-sm bg-linear-to-b from-black/20 to-transparent' />
          </div>

          {/* Fade overlay - Bottom */}
          <div className='absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none'>
            <div className='absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent' />
            <div className='absolute inset-0 backdrop-blur-sm bg-linear-to-t from-black/20 to-transparent' />
          </div>

          <div className='flex gap-6'>
            {/* First Column - Scroll Down */}
            <ScrollingColumn skills={firstColumnSkills} direction="down" />

            {/* Second Column - Scroll Up */}
            <ScrollingColumn skills={secondColumnSkills} direction="up" />
          </div>
        </div>
      </div>
    </section>
  )
}

interface ScrollingColumnProps {
  skills: Array<{
    name: string
    icon: string
    category: string
  }>
  direction: 'up' | 'down'
}

const ScrollingColumn = ({ skills, direction }: ScrollingColumnProps) => {
  const columnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!columnRef.current) return

    // Calculate the height of one set of skills
    const singleSetHeight = columnRef.current.scrollHeight / 3

    gsap.set(columnRef.current, {
      y: direction === 'down' ? 0 : -singleSetHeight
    })

    gsap.to(columnRef.current, {
      y: direction === 'down' ? -singleSetHeight : 0,
      duration: skills.length * 4,
      ease: 'none',
      repeat: -1,
      modifiers: {
        y: (y) => {
          const yValue = parseFloat(y)
          if (direction === 'down') {
            return `${yValue % -singleSetHeight}px`
          } else {
            return `${yValue % singleSetHeight}px`
          }
        }
      }
    })
  }, [skills, direction])

  return (
    <div className='flex-1 relative'>
      <div ref={columnRef} className='flex flex-col gap-6'>
        {/* Triple the skills for seamless loop */}
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  )
}

interface SkillCardProps {
  skill: {
    name: string
    icon: string
    category: string
  }
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <SpotlightCard
      className="min-h-40 p-6 transition-all duration-300 hover:border-tertiary-app/50"
      spotlightColor="rgba(64, 255, 170, 0.15)"
    >
      <div
        className="flex flex-col items-center justify-center gap-3 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon */}
        <div className='relative w-16 h-16 flex items-center justify-center'>
          <div className={cn(
            'absolute inset-0 rounded-full bg-linear-to-br from-tertiary-app/20 to-secondary-app/20',
            'transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-0'
          )} />
          <div className='relative text-4xl'>
            {/* Placeholder for icon */}
            <span className='text-tertiary-app'>⚡</span>
          </div>
        </div>

        {/* Skill Name */}
        <div className='text-center'>
          <h4 className='text-lg font-semibold text-white mb-1'>
            {skill.name}
          </h4>
          <p className='text-sm text-gray-400'>
            {skill.category}
          </p>
        </div>
      </div>
    </SpotlightCard>
  )
}

export default SkillSection
