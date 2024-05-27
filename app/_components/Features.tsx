import CustomCard from '@/components/ui/CustomCard';
import { FeatureList } from '@/lib/constants';

const Features = () => {
    return (
        <section className="bg-gradient-to-tr from-[#ffefba] to-[#ffeeee] dark:bg-gradient-to-tr dark:from-background dark:to-background  light:text-white dark:text-white py-10">
            <div className="container">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold sm:text-5xl mt-8">Upgrade Your Financial Game</h2>

                    <p className="mt-4 text-gray-600">
                        Manage your Money like a pro with the following features.
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