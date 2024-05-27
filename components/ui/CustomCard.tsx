import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

const CustomCard = ({ title, desc, icon }: any) => {
    return (
        <Card className='hover:scale-105 hover:drop-shadow-lg hover:shadow-white transition-all ease-linear dark:hover:shadow-purple-400 dark:drop-shadow-2xl'>
            <CardHeader>
                <CardTitle>
                    <p className="text-6xl">
                        {icon}
                    </p>
                </CardTitle>
            </CardHeader>
            <CardContent className='font-bold text-xl'>
                {title}
            </CardContent>
            <CardFooter className='text-gray-600 font-medium text-base text-justify'>
                {desc}
            </CardFooter>
        </Card>
    )
}

export default CustomCard;