import GradientText from '@/components/GradientText'
import TextType from '@/components/TextType'
import React from 'react'
import ConnectButton from './ConnectButton'
import Particles from '@/components/Particles'

const HeroSection = () => {
  return (
    <div className='relative w-full h-dvh border flex flex-col items-center justify-center px-6'>
      <div className='absolute inset-0 z-0'>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className='relative z-10 flex flex-col items-center justify-center'>
        <h1 className='text-center text-4xl sm:text-6xl md:text-7xl mb-10 font-semibold md:leading-tight'>Turning bold ideas into
          <br />
          functional{" "}
          <GradientText
            colors={["#40FFAA", "#235DF3", "#40FFAA", "#235DF3", "#40FFAA"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            digital solutions.
          </GradientText></h1>
        <h2 className='text-lg sm:text-2xl md:text-3xl mb-16 text-center'>
          Hello, I'm Reza Adrian{" "}
          <TextType
            text={[
              "A Software Engineer.",
              "A Tech Enthusiast.",
              "A Problem Solver."
            ]}
            typingSpeed={75}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h2>
        <ConnectButton />
      </div>
    </div>
  )
}

export default HeroSection
