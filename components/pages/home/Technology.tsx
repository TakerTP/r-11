import React from 'react'
import { Techs } from './info/teachInfo'

export const Technology = () => {
  return (
    <section className="bg-gray-700 body-font pb-10">
      <div className="container px-5 lg:pt-24 md:pt-24 sm:pt-[11.2rem] mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Technology
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            {
              "We prioritize continuous self-development as the cornerstone of our success. We are dedicated to staying at the forefront of technology by immersing ourselves in the latest tools and frameworks. This commitment allows us to meet and exceed our clients' expectations effectively."
            }
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {Techs.map((tech, index) => (
            <div key={index} className="lg:w-1/2 sm:w-full sm:h-70 p-4">
              <div className="flex relative sm:h-[17em]">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={tech.image}
                />

                <div className="px-8 py-10 relative z-9 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1 uppercase">
                    {tech.category.name}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 uppercase">
                    {tech.name}
                  </h1>
                  <p className="leading-relaxed">{tech.description}</p>
                  <br />
                  <a href={tech.url} target="_blank" className="text-green-500">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
