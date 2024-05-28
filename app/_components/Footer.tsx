import { QuickLinks, Socials, TechStack } from "@/lib/constants";
import Link from "next/link";
import CustomTooltip from "@/components/ui/CustomTooltip";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="border-t">
            <footer className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                        <div className="mx-auto max-w-sm lg:max-w-none">
                            <div className="flex flex-row justify-start items-center gap-4">
                                <Image src={'/Logo.svg'}
                                    alt='Footer-Logo'
                                    width={50}
                                    height={50} />
                                <span className="font-bold text-3xl">Expense.io</span>
                            </div>
                            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
                                Comprehensive Budget Management at Your Fingertips. Effortlessly add, edit, and analyze expenses while keeping track of every detail. Elevate your financial strategy with our advanced budgeting tool.
                            </p>

                            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                                {Socials.map((social, index) => (
                                    <Link key={index}
                                        className="text-gray-700 transition hover:text-gray-700/75"
                                        href={social.path}
                                        target="_blank"
                                        rel="noreferrer">
                                        <span className="sr-only"> {social.label} </span>
                                        <CustomTooltip element={social.icon} tooltipText={social.label} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
                            <div>
                                <strong className="font-medium text-gray-900"> Services </strong>
                                <ul className="mt-6 space-y-1">
                                    {QuickLinks[0].map((link, index) => (
                                        <li key={`${index}+""+${link.label}`}>
                                            <Link className="text-gray-700 transition hover:text-gray-700/75" href={link.path}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <strong className="font-medium text-gray-900"> About </strong>
                                <ul className="mt-6 space-y-1">
                                    {QuickLinks[1].map((link, index) => (
                                        <li key={`${index}+""+${link.label}`}>
                                            <Link className="text-gray-700 transition hover:text-gray-700/75" href={link.path}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <strong className="font-medium text-gray-900"> Support </strong>
                                <ul className="mt-6 space-y-1">
                                    {QuickLinks[2].map((link, index) => (
                                        <li key={`${index}+""+${link.label}`}>
                                            <Link className="text-gray-700 transition hover:text-gray-700/75" href={link.path}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex justify-between items-center text-center">
                        <div className="text-base text-gray-500 flex flex-col justify-center items-center gap-2">
                            <p> Created by <Link href="#" className="text-gray-700 transition hover:text-primary hover:underline">Shaik Shahbaaz Alam.</Link></p>
                            <p>© Expense.io 2024. All rights reserved.</p>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            {TechStack.map((tech, index) => (
                                <CustomTooltip key={index} element={tech.icon} tooltipText={tech.label} />
                            ))}
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer;