import { AIAPlusIcon, BlanjalokaIcon, DLHIcon } from '@/assets/icons'
import {
  AIAPlusImage2,
  BlanjalokaImage,
  DLHImage,
  PortfolioIcons,
  PortfolioImage,
} from '@/assets/images'

export interface ProjectUrl {
  name: string
  link: string
  type?: 'scroll' | 'external' // Add type for more robust logic
}

export interface Project {
  title: string
  description: string
  startDate: Date
  endDate?: Date
  image: string
  icon: string
  tags: string[]
  url: ProjectUrl[]
}

export const projects: Project[] = [
  {
    title: 'AIA+ Singapore',
    description:
      "AIA+ Singapore is a superapp that serves as the central hub for all AIA Insurance services in Singapore. I was part of the core mobile team from the start, developing major modules and features with React Native to shape the app's foundation. In addition, I contributed to the web team for nearly a year, assisting in building new features and resolving bugs for the AIA+ Singapore website using Next.js.",
    startDate: new Date(2023, 5),
    image: AIAPlusImage2,
    icon: AIAPlusIcon,
    tags: ['React Native', 'NextJS', 'TypeScript'],
    url: [
      { name: 'Website', link: 'https://aiaplus.aia.com.sg/' },
      { name: 'IOS', link: 'https://apps.apple.com/sg/app/aia-singapore/id1394337344' },
      {
        name: 'Android',
        link: 'https://play.google.com/store/apps/details?id=com.aia.sg.mypage.oneapp.wrapper.myaiasg',
      },
    ],
  },
  {
    title: 'SIMSAT',
    description:
      'SIMSAT is a data management system designed to facilitate the management of household waste in Batu city. I was involved in the development of this system using React and TailwindCSS, focusing on creating a user-friendly interface and efficient data handling while working with backend to integrate data to AWS infrastructure.',
    startDate: new Date(2022, 1),
    endDate: new Date(2022, 7),
    image: DLHImage,
    icon: DLHIcon,
    tags: ['React', 'Javascript', 'TailwindCSS'],
    url: [],
  },
  {
    title: 'Blanjaloka',
    description:
      'Blanjaloka is an e-commerce platform that connects local sellers with buyers in Indonesia. I played a key role in developing the front-end using JQuery, creating interfaces and functions for customer platform.',
    startDate: new Date(2021, 7),
    endDate: new Date(2022, 1),
    image: BlanjalokaImage,
    icon: BlanjalokaIcon,
    tags: ['JQuery', 'JavaScript', 'HTML'],
    url: [{ name: 'Website', link: 'https://www.blanjaloka.id/' }],
  },
  {
    title: 'Portfolio Website',
    description:
      'My personal portfolio website showcases my skills, projects, and experiences as a software developer. It is built using Vue.js, TypeScript, and TailwindCSS, providing a modern and responsive design.',
    startDate: new Date(2023, 5),
    endDate: new Date(2023, 5),
    image: PortfolioImage,
    icon: PortfolioIcons,
    tags: ['Vue', 'TypeScript', 'TailwindCSS'],
    url: [
      { name: 'Website', link: 'home-section', type: 'scroll' },
      { name: 'GitHub', link: 'https://github.com/Gintinks/resume-web-vue' },
    ],
  },
]
