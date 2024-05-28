import { StarIcon } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {

    const TestimonialData = [
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
    ]
    return (
        <div>
            <section className="bg-blue-100">
                <div className="container max-w-screen-xl py-16">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        What our user&apos;s are saying...
                    </h2>

                    <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8 bg-blue-100 rounded-md">
                        {TestimonialData.map((item) => (
                            <div className="mb-8 sm:break-inside-avoid" key={item.id}>
                                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                                    <div className="flex items-center gap-4">
                                        <Image src={item.avatar} alt="user-avatar-item.name" width={60} height={60} className="rounded-full" />
                                        <div>
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