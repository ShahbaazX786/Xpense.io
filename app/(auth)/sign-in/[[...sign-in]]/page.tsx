import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <section className="bg-white" >
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <span className="absolute z-10 top-10 left-10">
                    <Link href={'/'}>
                        <Button variant={"outline"} size={'icon'}>
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                </span>
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <Image width={600} height={400} priority
                        alt="RandomImage"
                        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="absolute inset-0 h-full w-full object-cover opacity-80" />
                    <div className="hidden lg:relative lg:block lg:p-12">
                        <Link href={'/'}><Image src={'./logo.svg'} height={50} width={80} alt="logo" /></Link>
                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Welcome to Expense.io 💵
                        </h2>
                        <p className="mt-4 leading-relaxed text-white/90">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam</p>
                    </div>
                </section>
                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <div className="inline-flex size-24 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20">
                                <Link href={'/'}><Image src={'./logo.svg'} height={50} width={60} alt="logo" /></Link>
                            </div>
                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl text-center">Welcome to Expense.io 💵</h1>
                            <p className="mt-4 leading-relaxed text-gray-500 max-w-96 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam</p>
                        </div>
                        <div className="mx-auto p-4">
                            <SignIn path="/sign-in" />
                        </div>
                    </div>
                </main>
            </div>
        </section >
    )
}