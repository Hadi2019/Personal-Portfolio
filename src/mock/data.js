import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hadi Al Khashman - Portfolio', // e.g: 'Name | Developer'
  lang: 'English', // e.g: en, es, fr, jp
  description: 'Software developer based in Toronto', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome ',
  name: 'Hadi Al Khashman',
  subtitle: 'Toronto-based Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hadi is studying Software Engineering Technology, Advanced Diploma, at Centennial College, maintaining an outstanding performance, and the graduation is expected by April 2021.
  `,
  paragraphTwo: `In addition to being able to quickly adapt and learn new skills required, Hadi has good understanding of Software Development Life Cycle SDLC methodologies (Agile, Waterfall), Mobile Apps Development using Android Studio, Relational Databases (Oracle sql & PL/sql), Back-End Languages (Java & C#), and Front-End languages (HTML, CSS, JavaScript). 
  `,
  paragraphThree: `Furthermore, Hadi has gained lots of administrative, problem-solving skills, communication and teamwork experience.    
  `,
  resume: 'https://drive.google.com/file/d/1HYa2WboKOG3oXQXzrTH_-V-wWGRbKqHy/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dentalSystem.jpg',
    title: 'Dental Payment System',
    info: 'This application calculates the fees of dental services for various age categories with different tax rates. Also, a discount is given based on the age category.',
    info2: 'Using: Java, JavaFX, and Scenebuilder',
    url: 'https://github.com/Hadi2019/DentalClinicSystem.git',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'payrollSystem.jpg',
    title: 'Employee Information System',
    info: 'This application registers the new employees, displays a list of current employees, and searches for a certain employee. ',
    info2: 'Using: Java, JavaFX, and Scenebuilder',
    url: 'https://github.com/Hadi2019/EmployeeInformationSystem.git',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'courseRegistrationPortal.jpg',
    title: 'Course Registration Portal ',
    info: 'This application registers the new students and displays the current registered ones with detailed registration information.',
    info2: 'Using: C# (Windows Presentation Foundation - WPF)',
    url: 'https://github.com/Hadi2019/CourseRegistrationPortal.git',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'asychronousProgramming.jpg',
    title: 'Asynchronous & Parallel Programming',
    info: 'This application implements the concepts of asynchronous and parallel programming on different tasks.',
    info2: 'Using: C# (Windows Presentation Foundation - WPF)',
    url: 'https://github.com/Hadi2019/Asynchronous-Parallel-Programming.git',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hadi.alkhashman@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/HadiAlKhashman',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hadi-al-khashman/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Hadi2019',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
