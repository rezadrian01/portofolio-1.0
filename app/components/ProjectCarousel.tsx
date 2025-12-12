'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import SpotlightCard from '@/components/SpotlightCard'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  category: string
  year?: string
}

interface ProjectCarouselProps {
  projects: Project[]
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const prevCardRef = useRef<HTMLDivElement>(null)
  const currentCardRef = useRef<HTMLDivElement>(null)
  const nextCardRef = useRef<HTMLDivElement>(null)

  // Create infinite loop by tripling the array
  const extendedProjects = [...projects, ...projects, ...projects]
  const [offset, setOffset] = useState(projects.length)

  // Scroll animation on mount
  useEffect(() => {
    if (!carouselRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(carouselRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    // GSAP animation for transition
    gsap.to([prevCardRef.current, currentCardRef.current, nextCardRef.current], {
      x: 100,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setOffset((prev) => prev - 1)
        gsap.fromTo(
          [prevCardRef.current, currentCardRef.current, nextCardRef.current],
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
        )
      },
    })
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    // GSAP animation for transition
    gsap.to([prevCardRef.current, currentCardRef.current, nextCardRef.current], {
      x: -100,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setOffset((prev) => prev + 1)
        gsap.fromTo(
          [prevCardRef.current, currentCardRef.current, nextCardRef.current],
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
        )
      },
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)

      // Reset position when reaching the boundaries (instant, no animation)
      if (offset >= projects.length * 2) {
        // Reached end, jump back to middle set instantly
        setOffset(projects.length)
      } else if (offset < projects.length) {
        // Reached beginning, jump forward to middle set instantly
        setOffset(projects.length * 2 - 1)
      }
    }, 600)

    return () => clearTimeout(timer)
  }, [offset, projects.length])

  // Get visible projects (previous, current, next)
  const getVisibleProjects = () => {
    const prev = extendedProjects[offset - 1]
    const current = extendedProjects[offset]
    const next = extendedProjects[offset + 1]
    return { prev, current, next }
  }

  const { prev, current, next } = getVisibleProjects()

  return (
    <div ref={carouselRef} className='relative w-full mx-auto mt-16 overflow-hidden'>
      <div className='relative flex items-center justify-center'>
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          disabled={isTransitioning}
          className='absolute left-4 md:left-8 z-20 p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 disabled:opacity-50'
          aria-label='Previous project'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>

        {/* Carousel Container */}
        <div className='relative w-full max-w-7xl overflow-visible'>
          <div
            className={cn(
              'flex items-center justify-center gap-4 md:gap-8',
              isTransitioning && 'transition-transform duration-500 ease-in-out'
            )}
            style={{
              transform: isTransitioning ? 'translateX(0)' : 'translateX(0)',
            }}
          >
            {/* Previous Card (Side) */}
            <div ref={prevCardRef} className='hidden lg:block shrink-0 w-150 opacity-30 scale-90 blur-sm'>
              <ProjectCard project={prev} isCenter={false} />
            </div>

            {/* Current Card (Center) */}
            <div ref={currentCardRef} className='shrink-0 w-full md:w-125 lg:w-150 scale-100 blur-0'>
              <ProjectCard project={current} isCenter={true} />
            </div>

            {/* Next Card (Side) */}
            <div ref={nextCardRef} className='hidden lg:block shrink-0 w-150 opacity-30 scale-90 blur-sm'>
              <ProjectCard project={next} isCenter={false} />
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          disabled={isTransitioning}
          className='absolute right-4 md:right-8 z-20 p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 disabled:opacity-50'
          aria-label='Next project'
        >
          <ChevronRight className='w-6 h-6' />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className='flex items-center justify-center gap-2 mt-8'>
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setOffset(projects.length + index)
            }}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              (offset % projects.length) === index
                ? 'w-8 bg-tertiary-app'
                : 'w-2 bg-white/30 hover:bg-white/50'
            )}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Project Card Component
const ProjectCard = ({ project, isCenter }: { project: Project; isCenter: boolean }) => {
  const handleProjetClick = () => {
    console.log({ project })
  }

  const cardContent = (
    <>
      {/* Year */}
      <div className={cn(
        'text-center text-sm text-gray-400 mb-3',
        isCenter && 'mt-2'
      )}>
        {project.year || '2025'}
      </div>

      {/* Project Title */}
      <h3 className={cn(
        'font-bold text-center mb-4',
        isCenter ? 'text-3xl md:text-4xl' : 'text-2xl'
      )}>
        {project.title}
      </h3>

      {/* Project Description */}
      <p className={cn(
        'text-center text-gray-300 mb-6 px-2',
        isCenter ? 'text-base' : 'text-sm'
      )}>
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className={cn(
              'rounded-full bg-white/10 border border-white/20 backdrop-blur-sm',
              isCenter ? 'px-4 py-2 text-sm' : 'px-3 py-1 text-xs'
            )}
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  )

  if (isCenter) {
    return (
      <SpotlightCard
        className="h-full cursor-pointer"
        spotlightColor="rgba(64, 255, 170, 0.15)"
        useGradientBorder={true}
      >
        <div onClick={handleProjetClick} className="relative">
          {cardContent}
        </div>
      </SpotlightCard>
    )
  }

  return (
    <div onClick={handleProjetClick} className={cn(
      'relative rounded-3xl border-2 border-white/20 bg-neutral-900 p-6 md:p-8 h-full'
    )}>
      {cardContent}
    </div>
  )
}

export default ProjectCarousel
