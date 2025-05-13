import React from 'react'
import Link from 'next/link';

const Login = () => {
    return (
        <section className="flex flex-col justify-center align-middle m-auto max-w-xl mt-[8rem]">
            <form className="space-y-6 container">
                <h1 className="text-3xl font-bold text-center">Sign in</h1>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white-700">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-white-700">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Your password"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign in
                    </button>
                </div>
            </form>
            <p className="mt-4 text-left text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <Link href="/user/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign up
                </Link>
            </p>
        </section>
    )
}
export default Login
