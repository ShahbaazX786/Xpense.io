import Link from "next/link";

const Hero = () => {
    return (
        <div>
            <section className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">Manage Your Expense Easily<strong className="font-extrabold text-primary sm:block"> Full Insights Of Your Money.</strong></h1>
                        <p className="mt-4 sm:text-xl/relaxed">Start Creating your budget and start saving money.</p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-800 sm:w-auto" href="/sign-up"> Get Started Now! </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;