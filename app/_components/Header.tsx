import Image from 'next/image';
import AuthenticatedButtons from './AuthenticatedButtons';
import { DarkModeToggleButton } from './DarkModeToggleButton';

const Header = () => {
    return (
        <div className='p-2 flex justify-between items-center border shadow-sm'>
            <div className='flex justify-center items-center'>
                <Image
                    src={'/Logo.svg'}
                    alt='Logo'
                    width={50}
                    height={50} />
                <span className='font-bold text-teal-600 text-xl'>
                    Expense.io
                </span>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <DarkModeToggleButton />
                <AuthenticatedButtons />
            </div>
        </div>
    )
}

export default Header;