import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='p-5 flex justify-between items-center border shadow-sm'>
            <Image
            src={'./logo.svg'}
            alt='Logo'
            width={100}
            height={100}
             />
            <Button><Link href={'/sign-in'}>Get Started</Link></Button>
        </div>
    )
}

export default Header;