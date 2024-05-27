import CustomCard from '@/components/ui/CustomCard';
import { FeatureList } from '@/lib/constants';  

const Features = () => {
    return (
        <section className="light:bg-gradient-to-tr from-blue-600 via-blue-300 to-green-400 dark:bg-gray-900  text-white dark:text-white py-10">
            <div className="container">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl mt-8">Upgrade Your Financial Game</h2>

                    <p className="mt-4 text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
                        nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
                    </p>
                </div>

                <div className="my-8 py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {FeatureList.map((feature) => (
                        <CustomCard key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            desc={feature.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;