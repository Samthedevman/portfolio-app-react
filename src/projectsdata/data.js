import Gallerina from '../assets/Gallerina.png'
import MartiniDemo from "../assets/martinigif.gif"



export const project1 = {
  name: 'Gallerina',
  role: "Full Stack Developer",
  image: Gallerina,
  summary:
    'This was a final group project during the last week of Dev Academy Aotearoa. The site fetches artwork from an external API, allowing a user to curate a collection. The site utilizes auth0 for authenication. Users can create a collection and add artwork to it. They can also rename, delete the collection, aswell as add notes to individual artworks within a collection. This project helped further my understanding of redux, authenication and how it ties into the backend, tailwind and full stack applications in general.',
  github: 'https://github.com/tohora-2023/Gallerina',
  live: '',
  techstack:
    'React, Javascript, Typescript, Tailwind, Knex, Redux, Express, Node.js ',
}

export const project2 = {
  name: "Motivational Martini",
  role: "Product Owner, Developer",
  image: MartiniDemo, 
  summary: "This was a small personal project undertaken after learning react and how to utilize external APIs. Devloped as a mobile app, the purpose of this app is to give the user a clean UI so they can screenshot the motivational quote aswell as settings to change colours. The user can swipe up to generate a new quote. I learned alot about swipe gestures and the use of z index to show the settings component when swiping left. This app is currently being redeveloped in React Native.",
  github: 'https://github.com/Samthedevman/Samuel-Adams---Personal-Project',
  techstack:
    'React, Javascript, Typescript, CSS, Express, Node.js ',
}

