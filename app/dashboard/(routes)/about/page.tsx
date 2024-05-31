import Image from "next/image";
import PreviousButton from "../../_components/PreviousButton";

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-10 lg:px-10 md:py-12 md:px-6 py-9 px-4">
            <div className='flex justify-start items-center mb-5'>
                <PreviousButton />
                <h2 className='font-bold text-3xl'>About Us</h2>
            </div>
            <div className="w-full mt-4">
                <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">We are here to make great design accessible and delightfull for everyone</h2>
                <p className="w-full font-normal text-base leading-6 text-gray-600 mt-6">
                    Expense.io, a burgeoning SaaS product, owes its success to a dynamic team of 12 dedicated professionals who excel in their respective roles. The team operates with a clear, shared vision of simplifying expense management for businesses of all sizes. By leveraging agile methodologies, they ensure rapid iteration and continuous improvement of their product. Each team member brings a unique skill set to the table, from backend development and frontend design to user experience and customer support. This diverse expertise allows them to address all aspects of the product comprehensively. Regular brainstorming sessions and an open-door policy foster a culture of innovation and collaboration, ensuring that ideas flow freely and the best solutions are implemented. This cohesive approach enables Expense.io to stay ahead of industry trends and continuously refine their platform to meet user needs effectively.</p>
            </div>

            <div className="lg:mt-14 sm:mt-10 mt-12">
                <Image quality={100} priority className="lg:block hidden w-full" src="https://i.ibb.co/GvwJnvn/Group-736.png" width={1200} height={1200} alt="Group of people Chilling" />
                <Image quality={100} priority className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" width={1200} height={1200} alt="Group of people Chilling" />
                <Image quality={100} priority className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" width={1200} height={1200} alt="Group of people Chilling" />
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-4">Expense.io prioritizes customer feedback and data-driven decisions. Active user engagement informs development cycles, with advanced analytics pinpointing necessary improvements and measuring feature impact. This customer-centric focus ensures a reliable, intuitive product. Moreover, rigorous security and compliance standards instill user confidence in data protection. These strategies foster lasting customer relationships, driving sustained growth and success for Expense.io.</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">Expense.io excels thanks to the team&apos;s unity. Seamless integration and scalability are paramount. Robust APIs ensure effortless software integration, while scalability accommodates startups and enterprises, maintaining performance as users grow.</p>
                </div>
                <div className="lg:flex items-center w-full lg:w-1/2 ">
                    <Image quality={100} priority className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-741.png" width={1200} height={1200} alt="people discussing on board" />
                    <Image quality={100} priority className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-781.png" width={1200} height={1200} alt="people discussing on board" />
                    <Image quality={100} priority className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-801.png" width={1200} height={1200} alt="people discussing on board" />
                </div>
            </div>
        </div>
    )
}

export default About;
