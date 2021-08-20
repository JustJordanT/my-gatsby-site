import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jordan Taylor | DevOps Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey!, My name is',
  name: 'Jordan Taylor',
  subtitle: 'I am a unknown Engineer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Currently working as a Sr Production engineer, join me on my journey as I become a software engineer, I spent the last couple of years working with Python, and now I am focusing on the .NET and Java ecosystems. And focusing on a couple of side projects.',
  paragraphTwo: '- 🏗️ I’m currently working on softwareEngineering in the .NET ecosystem.',
  paragraphThree: '- ⚡ Fun fact: I love learning new and exciting technologies, DDD, CQRS.',
  resume: 'https://jordanpersonalstorage.blob.core.windows.net/container01/Jordan-Taylor.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cfucard.png',
    title: '☁️ CloudFileUploader ',
    info: 'Service that will allow you to upload your file to an Azure storage account, and also pull files down and list them, out as well. Made with microservice architecture in mind along with best coding practices.',
    info2: '',
    url: '',
    repo: 'https://github.com/JustJordanT/cloudFileUploader', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'openERP.png',
    title: 'openERP',
    info: '🕸 .NET Clean Architecture, but for Microservices project. It uses Minimal Clean Architecture with DDD-lite, CQRS-lite, and just enough Cloud-native patterns apply on the simple OpenERP running on Tye with Dapr extension 🍻',
    info2: '',
    url: '',
    repo: 'https://github.com/JustJordanT/openERP', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'comingsoon.jpg',
    title: 'OpenTime',
    info: '⏳ OpenTime is a Clock in and out, time manager for tracking employee time.',
    info2: '',
    url: '',
    repo: 'https://github.com/JustJordanT/OpenTime', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'Jordantay9014@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Just_Jordan_T',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/justjordant/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JustJordanT',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
