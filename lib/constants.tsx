import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiClerk } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiDrizzle } from "react-icons/si";

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// Footer TechStack
export const TechStack = [
  {
    icon: <RiNextjsFill className="w-6 h-6 hover:text-primary" />,
    label: "Nextjs",
  },
  {
    icon: <RiTailwindCssFill className="w-6 h-6 hover:text-primary" />,
    label: "Tailwind",
  },
  {
    icon: <SiClerk className="w-6 h-6 hover:text-primary" />,
    label: "Clerk Auth",
  },
  {
    icon: <SiDrizzle className="w-6 h-6 hover:text-primary" />,
    label: "Drizzle ORM",
  },
  {
    icon: <BiLogoPostgresql className="w-6 h-6 hover:text-primary" />,
    label: "Postgresql (Neon DB)",
  },
] as const;

// Footer Social Media Links
export const Socials = [
  {
    icon: <FaFacebook className="w-6 h-6 hover:text-primary" />,
    label: "Facebook",
    path: 'www.facebook.com'
  },
  {
    icon: <FaGithub className="w-6 h-6 hover:text-primary" />,
    label: "Github",
    path: 'www.github.com'
  },
  {
    icon: <FaXTwitter className="w-6 h-6 hover:text-primary" />,
    label: "X (Twitter)",
    path: 'www.twitter.com'
  },
  {
    icon: <FaInstagram className="w-6 h-6 hover:text-primary" />,
    label: "Instagram",
    path: 'www.instagram.com'
  },
  {
    icon: <FaLinkedin className="w-6 h-6 hover:text-primary" />,
    label: "Linkedin",
    path: 'www.linkedin.com'
  },
] as const;

// Footer Quick Links
export const QuickLinks = [
  [
    {
      label: 'Budgeting',
      path: '/'
    },
    {
      label: 'Expenditure',
      path: '/'
    },
    {
      label: 'Analytics',
      path: '/'
    },
    {
      label: 'Upgrade Membership',
      path: '/'
    },
  ],
  [
    {
      label: 'About',
      path: '/'
    },
    {
      label: 'History',
      path: '/'
    },
    {
      label: 'Careers',
      path: '/'
    },
    {
      label: 'Our Team',
      path: '/'
    },
  ],
  [
    {
      label: 'FAQs',
      path: '/'
    },
    {
      label: 'Contact',
      path: '/'
    },
    {
      label: 'Live Chat',
      path: '/'
    }
  ],
] as const;