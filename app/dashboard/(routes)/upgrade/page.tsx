import { Button } from '@/components/ui/button';
import { MembershipDetails } from '@/lib/constants';
import Link from 'next/link';
import { FaCheck } from "react-icons/fa6";
import PreviousButton from '../../_components/PreviousButton';

const Upgrade = () => {

    return (
        <section className="p-10">
            <div className='flex justify-start items-center mb-5'>
                <PreviousButton />
                <h2 className='font-bold text-3xl'>Upgrade Membership</h2>
            </div>
            <div className="relative bg-clip-border text-gray-700 flex h-full min-h-[314px] w-full flex-col items-center justify-center rounded-xl bg-gray-900 px-8">
                <div className="container mx-auto text-center">
                    <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white mb-4">Upgrade your membership today</h2>
                    <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-8 opacity-70">Choose the perfect plan for your financial needs</p>
                </div>
            </div>
            <div className="px-8 pt-8 pb-16 -mt-16 lg:px-30 xl:px-40">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {MembershipDetails.map((plan, index) => (
                        <div key={index} className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md lg:h-max z-10 hover:scale-105 hover:ring-2 hover:bg-zinc-50 transition-all ease-linear'">
                            <div className="p-6 text-center">
                                <h5 className="text-xl font-semibold text-green-500 text-center">{plan.type}</h5>
                                <h3 className="font-semibold flex justify-center items-center mt-5 mb-2 text-3xl">${plan.price}<span className="text-xl font-semibold">/per month</span></h3>
                                <ul className="flex flex-col items-center justify-start gap-3 pt-6 mt-2 mb-5">
                                    {plan.features.map((feature, index) => (
                                        <li className="flex items-center gap-2 py-1 text-gray-700" key={index}>
                                            <FaCheck className='text-green-500' />
                                            <span className="text-base font-normal">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button variant={index === 0 ? 'outline' : 'default'} size={'lg'} disabled={index === 0} className="font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center justify-center gap-4" type="button">
                                    <Link href={index === 0 ? '/dashboard' : '/dashboard/about'}>
                                        {index === 0 ? 'Current Plan' : 'Upgrade Now!'}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Upgrade;