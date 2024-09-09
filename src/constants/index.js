import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  chatapp,
  sy,
  justdial,
 
  bns,
  coverhunt,
  microverse,
  lawcontact,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'MERN Stack Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Associate Software Developer',
    company_name: 'synergy universal',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2023 - Present',
  },
  {
    title: 'Trainee (.NET Full-stack)',
    company_name: 'Sathya Technologies',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2022',
  },
 
 
];

const projects = [
  {
    id: 'project-1',
    name: 'Chat App',
    description: 'A real-time chat application that allows users to send and receive messages instantly.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: chatapp,
    repo: 'https://github.com/jainoddin/chat-app',
    demo: 'https://chat-app-jain.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'synergy watch',
    description:
      'Synergy Watch is a platform for sharing and tracking scores, similar to YouTube.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: sy,
    repo: 'https://github.com/jainoddin/next-watch-project',
    demo: 'https://synergy-watch-2.web.app/',
  },
  {
    id: 'project-3',
    name: 'Justdial',
    description: 'Justdial is a single-page business directory app built with React, providing users with quick access to local services.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: justdial,
    repo: 'https://github.com/jainoddin/Justdial.in',
    demo: 'https://jain-justdial-project.web.app',
  },
  {
    id: 'project-4',
    name: 'Lawyer contact details',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: lawcontact,
    repo: 'https://github.com/jainoddin/contact-code-in-react',
    demo: 'https://jain-law-project.web.app',
  },
  {
    id: 'project-5',
    name: 'bns,bnss,bsa',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: bns,
    repo: 'https://github.com/jainoddin/bnss-rea',
    demo: 'https://jain-bns-project.web.app',
  },
];

export { services, technologies, experiences, projects };
