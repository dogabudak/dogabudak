import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Project,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Doğa Budak',
  description:
    'Munich-based Full Stack Engineer with a passion for creative coding, gaming, and building useful things for curious minds.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Projects: 'projects',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Doğa Budak.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Munich-based <strong className="text-stone-100">Full Stack Software Engineer</strong> with over a decade
        of experience across startups and scaleups. Currently, I work at{' '}
        <strong className="text-stone-100">ParcelLab</strong> building tools that power seamless post-purchase customer
        experiences.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I love shipping meaningful software, working on side projects like games and analytics platforms, and exploring
        how code, design, and human behavior intersect. When I’m not coding, you’ll find me biking, parenting, or
        planning my next adventure.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Download Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Get in Touch',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  aboutItems: [
    {label: 'Location', text: 'Munich, Germany', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Turkish', Icon: FlagIcon},
    {label: 'Interests', text: 'Game development, History, Cycling, Fatherhood', Icon: SparklesIcon},
    {label: 'Study', text: 'Yıldız Technical University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'ParcelLab', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {name: 'Turkish', level: 10},
      {name: 'English', level: 9},
      {name: 'German', level: 6},
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {name: 'React', level: 9},
      {name: 'TypeScript', level: 8},
      {name: 'Tailwind CSS', level: 7},
      {name: 'GraphQL', level: 7},
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {name: 'Node.js', level: 9},
      {name: 'Rust', level: 7},
      {name: 'Golang', level: 6},
    ],
  },
  {
    name: 'Game Development',
    skills: [
      {name: 'Godot', level: 6},
      {name: 'GDScript', level: 6},
      {name: 'Procedural Design', level: 6},
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {name: 'React Native', level: 8},
      {name: 'Flutter', level: 5},
    ],
  },
];

/**
 * Projects section
 */
export const projects: Project[] = [
  {name: 'Piarka', description: 'A travel assistant designed for curious solo explorers.'},
  {name: 'Sliden & Learn', description: 'A playful multilingual animal quiz for toddlers.'},
  {name: '81 Guides', description: 'Tourist info app for all 81 cities in Turkey.'},
  {name: 'An Unusual Refugee', description: 'A narrative survival game on an alien planet.'},
  {name: 'Into the Light', description: 'A roguelike RPG with procedural dungeons and turn-based combat.'},
  {name: 'dogabudak.com', description: 'My personal portfolio and playground.'},
  {name: 'Piarka Software', description: 'A small studio for experimental tech and games.'},
  {name: 'Yeşil Doğa', description: 'A green initiative focused on ecological awareness.'},
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Nuremberg',
    url: 'https://www.instagram.com/p/CeLb_0FKChLJmH0sJ9YyMOs7BmR8IP-g7PRXFw0/',
    image: porfolioImage3,
  },
  {
    title: 'Cuba',
    url: 'https://www.instagram.com/p/B4JDxdVKjaiggpDEZNMAD0lJM9qNJdzVTRt3P40/',
    image: porfolioImage4,
  },
  {
    title: 'Seychelles',
    url: 'https://www.instagram.com/p/Cg7yAHDq2j1trlYKMYOwFejHoIgkxN_qKATwIM0/',
    image: porfolioImage5,
  },
  {
    title: 'Maspolamas',
    url: 'https://www.instagram.com/p/BzEKbRAIy4xz4UBv4JEnmkbPSeZTikyEKe6FHo0/',
    image: porfolioImage6,
  },
  {
    title: 'Oktoberfest',
    url: 'https://www.instagram.com/p/BqNtIV7FeWuPZd4BFAxMprdsr6GkCLF8OGNphE0/',
    image: porfolioImage7,
  },
];

/**
 * Resume section --
 */
// TODO Content is tirt
export const education: TimelineItem[] = [
  {
    date: 'Mar. 2017 - Jan.2018',
    location: 'Clausthal Technical University, Niedersachsen Germany',
    title: 'M.Sc. Informatik',
    content: <p>Intensive german course and Masters in computer science.</p>,
  },
  {
    date: 'Sep. 2009-Jun.2014 ',
    location: 'Yıldız Technical University, Istanbul Turkey',
    title: 'BSc. Electronics and Comm. Engineering',
    content: <p>Electronics and communication engineering. </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - Present',
    location: 'ParcelLab',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Leading backend initiatives for post-purchase experiences using Node.js, MongoDB, and AWS (SQS, Lambda). Also
        contribute to architectural planning, mentoring, and technical documentation.
      </p>
    ),
  },
  {
    date: 'July. 2021 - July 2022',
    location: 'Kirinus Health',
    title: 'Fullstack Developer',
    content: <p>Fullstack developer for an online therapy platform, developed with mongodb, golang and flutter.</p>,
  },
  {
    date: 'Aug. 2018 - July 2021',
    location: 'Check24',
    title: 'Fullstack Developer',
    content: (
      <p>
        Fullstack developer for Germany's biggest comparison portal, developed with mongodb and React and typescript.
      </p>
    ),
  },
  {
    date: 'Jan. 2018 - Aug 2018',
    location: 'ProSieben Sat.1',
    title: 'Backend Developer',
    content: <p>Backend engineer for ProSieben online services , developed with mongodb and nodejs and aws lambda.</p>,
  },
  {
    date: 'Aug. 2014 - Mar. 2017',
    location: 'Matriks Bilgi Dagitim Hizmetleri',
    title: 'Backend Developer',
    content: <p>Backend engineer for Stock market data provider, developed with cassandra and nodejs and rustlang.</p>,
  },
];

/**
 * Contact section
 */
const CONTACT_EMAIL = 'dogabudak@gmail.com';
const GITHUB_URL = 'https://github.com/dogabudak';
const INSTAGRAM_URL = 'https://www.instagram.com/budakdoga/';
const MUNICH_MAP_URL = 'https://www.google.com/maps?q=81549,Munich,Germany';

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out for collaborations, game dev talk, or tech ideas.',
  items: [
    {
      type: ContactType.Email,
      text: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      type: ContactType.Github,
      text: 'dogabudak',
      href: GITHUB_URL,
    },
    {
      type: ContactType.Instagram,
      text: '@budakdoga',
      href: INSTAGRAM_URL,
    },
    {
      type: ContactType.Location,
      text: '81549, Munich, Germany',
      href: MUNICH_MAP_URL,
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: GITHUB_URL},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/doga-budak-40635b95'},
  {label: 'Instagram', Icon: InstagramIcon, href: INSTAGRAM_URL},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/dogabudak'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/doga.budak.3'},
];
