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


export const Faqs = [
  {
    question: 'What is Expense.io',
    answer: 'Expense.io is a comprehensive SaaS application that helps users manage their finances effectively. It offers budgeting tools, real-time expenditure tracking, personalized savings suggestions, and notifications for over-budget spending. Additionally, it provides detailed financial analytics to help users gain insights and make informed financial decisions, ensuring better control over their money.'
  },
  {
    question: 'How can Expense.io help me?',
    answer: 'Expense.io helps you manage finances by offering budgeting tools, real-time expense tracking, savings suggestions, over-budget alerts, and detailed financial analytics.'
  },
  {
    question: 'Is the Membership required to get started?',
    answer: 'No, you can start it free however if you need advanced analytics and information then you are always welcome to upgrade your membership.'
  },
  {
    question: 'How secure is my information?',
    answer: 'Expense.io ensures your information is highly secure with advanced encryption, regular security audits, and strict privacy policies. Your data is protected and kept confidential at all times.'
  },
  {
    question: 'How to contact support in case of any urgent query?',
    answer: 'For urgent queries, you can contact support through the dedicated help center within the Expense.io app or via email at support@expense.io.'
  },
] as const;