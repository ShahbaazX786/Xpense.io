import Link from "next/link";
import Newsletter from "./Newsletter";
import FAQ from "./FAQ";

const Hero = () => {
    return (
        <section className="bg-zinc-50">
            <div className="mx-auto w-full px-4 lg:flex min-h-[400px] md:h-auto lg:h-auto flex justify-center items-center">
                <div className="flex flex-col gap-2 text-center justify-center items-center p-28">
                    <p className="text-3xl font-extrabold sm:text-6xl">Manage Your Expense Easily<strong className="font-extrabold text-primary sm:block mt-2"> Full Insights Of Your Money.</strong></p>
                    <p className="mt-4 sm:text-xl relaxed">Start Creating your budget and start saving money.</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link className="block w-full rounded bg-primary px-12 py-5 text-md font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-800 sm:w-auto" href="/sign-up"> Create an Account Now! </Link>
                    </div>
                </div>
            </div>
            <FAQ/>
            <Newsletter />
        </section>
    )
}

export default Hero;