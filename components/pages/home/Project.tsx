import React from 'react'
import { Projects } from './info/teachInfo'

export const Project = () => {
  return (
    
<section id="projects" className="text-gray-600 body-font mb-10">
      <div className="container px-5 lg:pt-24 md:pt-24 sm:pt-[11.2rem] mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Projects
          </h1>
          <hr className="h-px my-8 w-1/5 self-center bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {Projects.map((project, index) => (
            <div key={index} className="sm:w-full lg:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={project.image}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                {project.title}
              </h2>
              <p className="leading-relaxed text-base">
                {project.description === ""
                  ? "No Description"
                  : project.description.substring(0, 150) + "..."}
              </p>

              <div className="flex w-full justify-center items-center">
                <div className="flex overflow-x-auto w-auto ">
                  {project.techStack.map((tech, index) => (
                    <a
                      href={tech.url}
                      key={index}
                      target="_blank"
                      className=" flex flex-shrink-0 bg-[#fff] h-[54px] w-[54px] rounded-[12px] shadow-md justify-center items-center m-2"
                    >
                      <div className="flex h-[34px] w-[34px] border border-white justify-center items-center">
                        <img
                          className="h-[28px]"
                          src={tech.icon}
                          title={tech.name
                            .split(" ")
                            .map(
                              (word) => word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <button className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
