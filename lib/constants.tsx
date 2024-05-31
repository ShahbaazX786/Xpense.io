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
    price: 0,
    features: [
      'Add Budgets',
      'Add Expenses',
      'Utilize Dashboard',
    ]
  },
  {
    type: 'Pro',
    price: 49.99,
    features: [
      'Data Encryption',
      'Add Budgets',
      'Add Expenses',
      'Analytics Tab unlocked',
      'Dark Mode',
    ]
  },
  {
    type: 'Pro+',
    price: 99.99,
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
] as const;

// Testimonials
export const TestimonialData = [
  {

    id: 1,
    avatar: 'https://i.pravatar.cc/?img=3',
    rating: 5,
    name: 'Jaxon Storm',
    review: 'Expense.io has revolutionized the way our company handles expense reports. The user interface is intuitive and the automation features save us hours every week'
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/?img=7',
    rating: 5,
    name: 'Milo Hawk',
    review: 'Game-changer'
  },
  {
    id: 3,
    avatar: 'https://i.pravatar.cc/?img=5',
    rating: 4,
    name: 'Ezra Phoenix',
    review: "We've been using Expense.io for six months now, and it's made our expense management much more efficient. The reporting tools are especially useful for our finance team. We can generate detailed expense reports with just a few clicks, which saves us a lot of time. Additionally, the automated alerts help us stay on top of any unusual expenses"
  },
  {
    id: 4,
    avatar: 'https://i.pravatar.cc/?img=12',
    rating: 4,
    name: 'Henry Mitchell',
    review: 'Absolutely love Expense.io! It simplifies our reimbursement process and integrates seamlessly with our accounting software. Highly recommended!'
  },
  {
    id: 5,
    avatar: 'https://i.pravatar.cc/?img=17',
    rating: 5,
    name: 'Paul Starr',
    review: 'Expense.io has revolutionized the way our company handles expense reports. The user interface is intuitive and the automation features save us hours every week. I particularly love the real-time tracking feature which keeps us up-to-date with our spending. Plus, the seamless integration with our accounting software makes the whole process smooth and efficient.'
  },
  {
    id: 6,
    avatar: 'https://i.pravatar.cc/?img=20',
    rating: 4,
    name: 'Grace Hamilton',
    review: 'A great tool for businesses of any size. Expense.io has helped us stay organized and compliant with our expense policies.'
  },
  {
    id: 7,
    avatar: 'https://i.pravatar.cc/?img=33',
    rating: 5,
    name: 'James Carter',
    review: 'Worth every penny'
  },
  {
    id: 8,
    avatar: 'https://i.pravatar.cc/?img=36',
    rating: 3,
    name: 'Charlotte Reynolds',
    review: "Using Expense.io has been mostly positive. It simplifies expense tracking and the receipt scanning is a nice feature. However, I've encountered a few issues with syncing across devices.Customer support is helpful, but sometimes slow to respond.It's a good tool, but not without its drawbacks"
  },
  {
    id: 9,
    avatar: 'https://i.pravatar.cc/?img=68',
    rating: 5,
    name: 'Benjamin Foster',
    review: 'Switching to Expense.io was the best decision we made this year. The setup was quick and easy, and the platform is very user-friendly. We particularly appreciate the customization options available, which allow us to tailor the system to our specific needs. The customer support has also been incredibly responsive and helpful.'
  },
] as const;