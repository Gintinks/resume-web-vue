import { AIAPlusIcon, BlanjalokaIcon, DLHIcon } from '@/assets/icons'
import { AIAPlusImage2, BlanjalokaImage, DLHImage } from '@/assets/images'

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
      'AIA+ Singapore is a superapp designed to be a go to app for all AIA Insurance services in Singapore. I worked on the mobile app development using React Native, integrating various features and functionalities to enhance user experience. Other than that, I also assisted the web team in developing and maintaining the AIA+ Singapore website using Next.js.',
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
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    startDate: new Date(2023, 5),
    endDate: new Date(2023, 5),
    image: 'https://placehold.co/600x400',
    icon: AIAPlusIcon,
    tags: ['Vue', 'TypeScript', 'TailwindCSS'],
    url: [
      { name: 'Website', link: 'home-section', type: 'scroll' },
      { name: 'GitHub', link: 'https://github.com/Gintinks/resume-web-vue' },
    ],
  },
]
