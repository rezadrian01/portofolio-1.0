'use client'

import Image from 'next/image'
import SpotlightCard from '@/components/SpotlightCard'
import GradientText from '@/components/GradientText'
import {
  DETAIL_TITLE,
  DETAIL_HEADING,
  DETAIL_DESC,
  SPOTIFY_DATA,
  TOOLS,
  TOOLS_HEADING,
  BUCKET_LIST
} from '@/data/detail-section'
import { cn } from '@/lib/utils'

const DetailSection = () => {
  return (
    <section className="min-h-screen w-full py-16 px-6 md:px-12 lg:px-24 relative flex flex-col items-center pt-44">
      {/* Title */}
      <div className="text-center mb-16">
        <p className="text-sm md:text-base text-white/60 mb-2">{DETAIL_TITLE}</p>
        <h2 className="text-3xl md:text-5xl font-bold">
          Explore <GradientText
            colors={["#40FFAA", "#235DF3", "#40FFAA", "#235DF3", "#40FFAA"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >{DETAIL_HEADING.split(' ').slice(1).join(' ')}</GradientText>
        </h2>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto">
          {DETAIL_DESC}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Spotify Card */}
        <SpotlightCard
          className="p-8 backdrop-blur-sm bg-white/5 border-white/10 rounded-3xl h-full"
          spotlightColor="rgba(64, 255, 170, 0.15)"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">{SPOTIFY_DATA.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {SPOTIFY_DATA.description}
              </p>
            </div>
          </div>

          {/* Album Display */}
          <div className="flex items-center gap-4 mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
              <Image
                src={SPOTIFY_DATA.albumCover}
                alt="Album Cover"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="w-full h-1 bg-white/10 rounded-full mb-2">
                <div className="w-1/3 h-full bg-tertiary-app rounded-full"></div>
              </div>
              <p className="text-white/80 text-sm truncate">{SPOTIFY_DATA.albumTitle}</p>
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 cursor-pointer hover:border-tertiary-app/50 transition-colors">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </SpotlightCard>

        {/* Tools and Bucketlist Column */}
        <div className="flex flex-col gap-6">
          {/* Tools Card */}
          <SpotlightCard
            className="p-8 backdrop-blur-sm bg-white/5 border-white/10 rounded-3xl"
            spotlightColor="rgba(35, 93, 243, 0.15)"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              {TOOLS.map((tool, index) => (
                <div
                  key={index}
                  className="w-16 h-16 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-center hover:border-secondary-app/50 transition-all duration-300 cursor-pointer group"
                >
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={32}
                    height={32}
                    className={cn(
                      "group-hover:scale-110 transition-transform",
                      tool.name === "GitHub" && "invert"
                    )}
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-white/80 text-sm leading-relaxed">
              {TOOLS_HEADING}
            </p>
          </SpotlightCard>

          {/* Bucketlist Card */}
          <SpotlightCard
            className="p-8 backdrop-blur-sm bg-white/5 border-white/10 rounded-3xl flex-1"
            spotlightColor="rgba(64, 255, 170, 0.15)"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                {/* Checklist and Checkbox Images */}
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src="/landing-page/bucketlist.png"
                    alt="Bucketlist"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className='relative w-12 h-12 shrink-0'>
                    <Image
                      src="/landing-page/check.png"
                      alt="Check"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{BUCKET_LIST[0].title}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {BUCKET_LIST[0].description}
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}

export default DetailSection
