import React from 'react'
// import { data } from '../data/data.js'
import Gallerina from '../assets/Gallerina.png'

const Projects = () => {
  const project1 = {
    id: 1,
    name: 'Gallerina',
    image: Gallerina,
    summary:
      'This was a final group project during the last week of Dev Academy. This site utilizes Auth0 for authentication. It fetches artwork from an external API, which a user can then curate a collection',
    github: 'https://github.com/tohora-2023/Gallerina',
    live: '',
  }

  const project2 = {}

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
        <div className="grid grid-cols-2 items-center gap-20 pt-10 pb-10">
          <img src={project1.image} alt="gallerinaimg" />
          <div>
            <p>{project1.name}</p>
            <p>{project1.summary}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
