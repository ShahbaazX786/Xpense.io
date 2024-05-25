'use client';

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const AuthenticatedButtons = () => {
    const { isSignedIn } = useUser();
    return (
        <>
            {
                isSignedIn ?
                    (<div className='flex justify-center items-center gap-4'>
                        <Button variant={'outline'} size={'sm'}><Link href={'/dashboard'}>Dashboard</Link></Button>< UserButton />
                    </div>) : (<Button><Link href={'/sign-in'}>Get Started</Link></Button>)
            }
        </>
    )
}

export default AuthenticatedButtons;