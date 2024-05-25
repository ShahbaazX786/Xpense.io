import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react'

const Newsletter = () => {
    return (
        <section className="container my-10 py-20">
            <div className='flex flex-col justify-center items-center'>
                <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
                    Want us to email you with the latest blockbuster news?
                </strong>
                <form className="my-5">
                    <div className="relative max-w-xl">
                        <label className="sr-only" htmlFor="email"> Email </label>
                        <Input
                            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                            id="email"
                            type="email"
                            placeholder="john@doe.com"
                        />
                        <Button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                            Subscribe
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Newsletter;