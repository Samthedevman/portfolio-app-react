import React from 'react'

import Gallerina from '../assets/Gallerina.png'
import Github from '../assets/github.png'
import Live from "../assets/live.png"

const Projects = () => {
  const project1 = {
    id: 1,
    name: 'Gallerina',
    image: Gallerina,
    summary:
      'This was a final group project during the last week of Dev Academy. The site fetches artwork from an external API, allowing a user to curate a collection. The site utilizes auth0 for authenication. Users can create a collection and add artwork to it. They can also rename, delete the collection, aswell as add notes to individual artworks within a collection.',
    github: 'https://github.com/tohora-2023/Gallerina',
    live: '',
    techstack:
      'React, Javascript, Typescript, Tailwind, Knex, Redux, Express, Node.js ',
  }

  // const project2 = {}

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        {/* container for projects */}
        <div className="grid grid-cols-2 gap-20">
          <img className="rounded-md" src={project1.image} alt="gallerinaimg" />
          <div>
            <div className='grid grid-cols-2'>
              <div>
              <p className="mb-5 text-2xl font-bold">{project1.name}</p>
              </div>
              <div className='flex justify-end space-x-5'>
              <a href={project1.github}>
                
              <img className="h-auto w-8" src={Github} alt="github" />
            </a>

            <a href={project1.live}>
            <img className="h-auto w-8" src={Live} alt="live" />
            </a>
            </div>
            </div>
            <p className="mb-5 text-l font-bold">Full Stack Developer</p>
            <p className="mb-5">{project1.summary}</p>
            <p className="mb-1 text-l font-bold">Tech Stack</p>
            <p className="mb-5">{project1.techstack}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20 mt-20">
          <img className="rounded-md" src={project1.image} alt="gallerinaimg" />
          <div>
            <div className='grid grid-cols-2'>
              <div>
              <p className="mb-5 text-2xl font-bold">{project1.name}</p>
              </div>
              <div className='flex justify-end space-x-5'>
              <a href={project1.github}>
                
              <img className="h-auto w-8" src={Github} alt="github" />
            </a>

            <a href={project1.live}>
            <img className="h-auto w-8" src={Live} alt="live" />
            </a>
            </div>
            </div>
            <p className="mb-5 text-l font-bold">Full Stack Developer</p>
            <p className="mb-5">{project1.summary}</p>
            <p className="mb-1 text-l font-bold">Tech Stack</p>
            <p className="mb-5">{project1.techstack}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

