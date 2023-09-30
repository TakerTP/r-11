import React from 'react'
import Slider from './Slider'

export const Hero = () => {
  return (
    <section id="home" className="bg-gray-700 text-white body-font">
      <div className="container mx-auto flex lg:pt-24 md:pt-24 sm:pt-[11.2rem] md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            R11 Developers
          </h1>
          <hr className="h-px mt-8 w-1/5 self-center bg-gray-200 border-0 dark:bg-white" />
          
          <div className="flex justify-center items-center bg-gray-700">
            <img className="h-[30rem]" src="" />
            <Slider />
          </div>
          <p className="sm:pr-12 sm:pl-12 pr-20 pl-20 mb-8 leading-relaxed">
            {
              "At R11, we embody the spirit of innovation and excellence. We are not just a group of individuals; we are a dynamic company, dedicated to providing top-notch solutions for your unique needs. With a strong emphasis on expertise, collaboration, and client satisfaction, we deliver results that exceed expectations."
            }
          </p>
        </div>
      </div>
    </section>
  )
}
