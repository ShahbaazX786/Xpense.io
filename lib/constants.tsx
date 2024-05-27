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

import { FcComboChart, FcDataEncryption, FcMoneyTransfer, FcOnlineSupport, FcPlanner } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { DollarSign } from "lucide-react";


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

// faqs
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

// Membership information
export const MembershipDetails = [
  {
    type: 'Starter',
    price: '0$',
    features: [
      'Data Encryption',
      'Add Budgets',
      'Add Expenses',
      'Utilize Dashboard',
      'Customer Support',
    ]
  },
  {
    type: 'Pro',
    price: '30$',
    features: [
      'Data Encryption',
      'Add Budgets',
      'Add Expenses',
      'Analytics Tab unlocked',
      'Dark Mode',
      'Savings Calculator',
    ]
  }
] as const;

// Features
export const FeatureList = [
  {
    id: 1,
    title: 'Budgeting',
    desc: "Plan and track your spending to stay within your financial limits and meet your savings goals.",
    icon: <FcCurrencyExchange />
  },
  {
    id: 2,
    title: 'Expense Tracking',
    desc: 'Easily record and categorize your spending for clear financial insights.',
    icon: <FcMoneyTransfer />
  },
  {
    id: 3,
    title: 'Comparative Analysis',
    desc: 'Gain deep insights into your spending patterns with comprehensive expenditure analytics.',
    icon: <FcComboChart />
  },
  {
    id: 4,
    title: 'Custom Reports',
    desc: 'Generate detailed custom reports to examine specific areas of your spending in depth.',
    icon: <FcPlanner />
  },
  {
    id: 5,
    title: 'Data Encryption',
    desc: 'Secure your financial information with robust data encryption, ensuring your personal details and transactions remain confidential.',
    icon: <FcDataEncryption />
  },
  {
    id: 6,
    title: '24/7 Support',
    desc: 'Receive timely assistance and guidance from our dedicated customer support team whenever you have questions or encounter issues.',
    icon: <FcOnlineSupport />
  },
] as const