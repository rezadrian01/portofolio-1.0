'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GradientText from '@/components/GradientText'
import Particles from '@/components/Particles'
import {
  COLLABORATION_TITLE,
  COLLABORATION_SUBTITLE,
  COLLABORATION_DESC,
  COLLABORATION_CTA,
  COLLABORATION_EMAIL,
  MARQUEE_TEXTS,
  SOCIAL_LINKS
} from '@/data/collaboration'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const CollaborationSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!marqueeRef.current) return

    const marqueeContent = marqueeRef.current.querySelector('.marquee-content')
    if (!marqueeContent) return

    // Infinite marquee animation
    const animation = gsap.to(marqueeContent, {
      x: '-50%',
      duration: 20,
      ease: 'none',
      repeat: -1,
    })

    return () => {
      animation.kill()
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    // Fade in animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full py-16 px-6 md:px-12 lg:px-24 relative flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles className="absolute inset-0" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <div className="space-y-8">
          {/* Title Section */}
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              {COLLABORATION_TITLE}{" "}
              <GradientText
                colors={["#40FFAA", "#235DF3", "#40FFAA", "#235DF3", "#40FFAA"]}
                animationSpeed={3}
                showBorder={false}
              >
                {COLLABORATION_SUBTITLE}
              </GradientText>
            </h2>
            <p className="text-white/60 text-base md:text-lg">
              {COLLABORATION_DESC}
            </p>
          </div>

          {/* Marquee Banner */}
          <div
            ref={marqueeRef}
            className="w-full overflow-hidden relative"
          >
            <div className="marquee-content flex items-center gap-8 whitespace-nowrap py-4">
              {/* Duplicate content for seamless loop */}
              {[...MARQUEE_TEXTS, ...MARQUEE_TEXTS].map((text, index) => (
                <React.Fragment key={index}>
                  <span className="text-xl md:text-2xl font-bold bg-linear-to-r from-tertiary-app to-secondary-app bg-clip-text text-transparent">
                    {text}
                  </span>
                  <span className="text-tertiary-app text-2xl">★</span>
                </React.Fragment>
              ))}
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent pointer-events-none" />
          </div>

          {/* CTA Section */}
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              {COLLABORATION_CTA}
            </h4>

            {/* Email Button */}
            <Link
              href={`mailto:${COLLABORATION_EMAIL}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:border-tertiary-app/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-tertiary-app"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-white font-medium">{COLLABORATION_EMAIL}</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {SOCIAL_LINKS.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm",
                  "flex items-center justify-center",
                  "hover:border-tertiary-app/50 hover:bg-white/10 hover:scale-110",
                  "transition-all duration-300 group"
                )}
                aria-label={social.name}
              >
                {social.icon === 'github' && (
                  <svg className="w-6 h-6 text-white group-hover:text-tertiary-app transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )}
                {social.icon === 'linkedin' && (
                  <svg className="w-6 h-6 text-white group-hover:text-tertiary-app transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                )}
                {social.icon === 'instagram' && (
                  <svg className="w-6 h-6 text-white group-hover:text-tertiary-app transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
                {social.icon === 'discord' && (
                  <svg className="w-6 h-6 text-white group-hover:text-tertiary-app transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollaborationSection
