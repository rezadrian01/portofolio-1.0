import Threads from '@/components/Threads'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='relative w-full min-h-dvh border flex flex-col md:grid md:grid-cols-2 items-center justify-center px-6 md:px-14 lg:px-56'>
      <div className='flex flex-col justify-center items-center p-10 order-2 md:order-1'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-5xl font-thin'>Ahmad Reza Adrian</h2>
          <h3 className='text-6xl font-semibold mb-8'>Software Engineer</h3>
          <p className='text-xl'>
            A software engineer specializing in full-stack web development with expertise in building scalable applications.
            Passionate about creating intuitive user experiences, mobile solutions, and exploring AI integration.
            Committed to continuous learning and delivering high-quality software solutions.
          </p>
        </div>
        <div className='flex items-center gap-4 w-full mt-8'>
          <button className='cursor-pointer px-6 md:px-8 py-3 md:py-4 rounded-full bg-linear-to-r from-quinary-app to-secondary-app text-white font-medium hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
            Contact Me
          </button>
          <button className='cursor-pointer px-6 md:px-8 py-3 md:py-4 rounded-full border backdrop-blur-2xl bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300'>
            More Info
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center p-10 order-1 md:order-2'>
        <Image
          loading='eager'
          src="/images/main_photo_cropped-2.png"
          alt="About Image"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className='absolute bottom-0 left-0 w-full'>
        <Threads
          amplitude={1.7}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
    </section >
  )
}

export default AboutSection
