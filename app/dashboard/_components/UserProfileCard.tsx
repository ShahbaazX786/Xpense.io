import { UserButton, useUser } from '@clerk/nextjs';

const UserProfileCard = () => {
    const { user } = useUser();

    return (
        <div className='drop-shadow-lg flex flex-col justify-start items-start p-5'>
            <div className="flex gap-2 items-center justify-start w-full">
                <UserButton />
                <div className='flex flex-col justify-center items-center'>
                    <span className='font-semibold text-base text-gray-700'>
                        {user?.fullName}
                    </span>
                    <span className='text-sm font-bold text-gray-500'>Base Plan</span>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard;