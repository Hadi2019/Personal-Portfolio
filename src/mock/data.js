import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hadi Al Khashman - Portfolio', // e.g: 'Name | Developer'
  lang: 'English', // e.g: en, es, fr, jp
  description: 'Software developer based in Toronto', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Developer',
  name: 'Hadi Al Khashman',
  subtitle: 'Welcome to my portfolio ',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hadi is studying Software Engineering Technology, Advanced Diploma, at Centennial College, maintaining an outstanding performance, and the graduation is expected by April 2021.
  `,
  paragraphTwo: `In addition to being able to quickly adapt and learn new skills required, Hadi has good understanding of Software Development Life Cycle SDLC methodologies (Agile, Waterfall), Mobile Apps Development using Android Studio, Relational Databases, Back-End Languages, and Front-End languages. 
  `,
  paragraphThree: `Furthermore, Hadi has gained lots of administrative, problem-solving skills, communication and teamwork experience.    
  `,
  resume: 'https://drive.google.com/file/d/1HYa2WboKOG3oXQXzrTH_-V-wWGRbKqHy/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Hadi project',
    info: 'this is',
    info2: 'my project',
    url: 'https://github.com/Hadi2019/Programming-Assignment03',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
