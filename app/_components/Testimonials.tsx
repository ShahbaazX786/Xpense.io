import { TestimonialData } from "@/lib/constants";
import { StarIcon } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
    return (
        <div>
            <section className="bg-blue-100">
                <div className="container max-w-screen-xl py-16">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        What our user&apos;s are saying...
                    </h2>

                    <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8 bg-blue-100 rounded-md">
                        {TestimonialData.map((item) => (
                            <div className="mb-8 sm:break-inside-avoid hover:scale-105 transition-all ease-linear cursor-pointer hover:drop-shadow-xl shadow-sm" key={item.id}>
                                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                                    <div className="flex items-center gap-4">
                                        <Image src={item.avatar} alt="user-avatar-item.name" width={60} height={60} className="rounded-full" />
                                        <div className="flex flex-col justify-center items-start">
                                            <div className="flex justify-center gap-0.5 text-transparent">
                                                {
                                                    Array.from({ length: item.rating }).map((_, index) => (
                                                        <StarIcon fill="gold" size={20} key={index} />
                                                    ))
                                                }
                                            </div>
                                            <p className="mt-0.5 text-lg font-medium text-gray-900">{item.name}</p>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-gray-700">
                                        {item.review}
                                    </p>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials;