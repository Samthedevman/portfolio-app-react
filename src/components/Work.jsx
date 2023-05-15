import React from 'react'
import Github from '../assets/github.png'
// import Live from '../assets/live.png'
import { project1, project2 } from '../projectsdata/data'

const Projects = () => {
  return (
    <div name="work" className="w-full h-full text-gray-300 bg-[#0a192f] text-sm">
      <div className="max-w-[1000px] h-screen mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-4">Check out some of my recent projects</p>
        </div>

        {/* container for projects */}
        <div className="grid grid-cols-2 gap-20">
          <img className="rounded-md mx-auto my-auto h-auto w-[70%]" src={project1.image} alt="gallerinaimg" />
          <div>
            <div className="grid grid-cols-2">
              <div className=''>
                <p className="mb-1 text-xl font-bold">{project1.name}</p>
              </div>
              <div className="flex justify-end space-x-5">
                <a href={project1.github}>
                  <img className="h-auto w-8" src={Github} alt="github" />
                </a>

                {/* <a href={project1.live}>
                  <img className="h-auto w-8" src={Live} alt="live" />
                </a> */}
              </div>
            </div>
            <p className="mb-1 text-l font-bold">Full Stack Developer</p>
            <p className="mb-1">{project1.summary}</p>
            <p className="mb-1 text-l font-bold">Tech Stack</p>
            <p className="mb-1">{project1.techstack}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20 mt-5">
          <img
            className="w-[30%] h-auto mx-auto my-auto rounded-md"
            src={project2.image}
            alt="gallerinaimg"
          />

          <div>
          <div className="grid grid-cols-4">
  <div className="col-span-3">
    <p className="mb-1 text-xl font-bold">{project2.name}</p>
  </div>
  <div className="col-span-1 flex justify-end space-x-5">
    <a href={project2.github}>
      <img className="h-auto w-8" src={Github} alt="github" />
    </a>
  </div>
</div>
            <p className="mb-1 text-l font-bold">{project2.role}</p>
            <p className="mb-1">{project2.summary}</p>
            <p className="mb-1 text-l font-bold">Tech Stack</p>
            <p className="mb-1">{project2.techstack}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
