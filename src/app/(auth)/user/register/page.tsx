"use client";

import React, { useState } from 'react'
import Link from "next/link";
import {validateRegisterForm} from "@/app/lib/validation/register";
import axios from "axios";

interface formData {
    name: string;
    email: string;
    password: string;
    password2: string;
}

const Register = () => {
    const [data, setData] = useState<formData>({
        name: "",
        email: "",
        password: "",
        password2: "",
    })

    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSuccess(null);
        setError(null);

        const validationError = validateRegisterForm(data);
        if (validationError) {
            setError(Object.values(validationError)[0] || 'Validation failed');
            console.log(error)
            return;
        }




    }

    return (
        <section className="flex flex-col justify-center align-middle m-auto max-w-xl mt-[8rem]">
            <form className="space-y-6 container" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold text-center">Sign up</h1>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white-700">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={`mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                            ${error && error === 'Name must be at least 2 characters' ? "border-red-500 ": null}
                        `}
                        required
                    />
                    {error && error === 'Name must be at least 2 characters' &&
                        <p className={`text-red-500 text-xs mb-[-1rem]`}>{error}</p>
                    }
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white-700">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={data.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        className={`mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                            ${error && error === 'Invalid email format' ? "border-red-500 ": null}
                        `}
                        placeholder="you@example.com"
                    />
                    {error && error === 'Invalid email format' &&
                        <p className={`text-red-500 text-xs mb-[-1rem]`}>{error}</p>
                    }
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-white-700">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={data.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                        className={`mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                            ${error && error === 'Password must be at least 8 characters' ? "border-red-500 ": null}
                        `}
                        placeholder="Your password"
                    />
                    {error && error === 'Password must be at least 8 characters' &&
                        <p className={`text-red-500 text-xs mb-[-1rem]`}>{error}</p>
                    }
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-white-700">
                        Password again
                    </label>
                    <input
                        id="password2"
                        name="password2"
                        type="password"
                        value={data.password2}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                        className={`mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                            ${error && error === 'Passwords do not match' ? "border-red-500 ": null}
                        `}
                        placeholder="Your password again"
                    />
                    {error && error === 'Passwords do not match' &&
                        <p className={`text-red-500 text-xs mb-[-1rem]`}>{error}</p>
                    }
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign up
                    </button>
                </div>
            </form>
            <p className="mt-4 text-left text-sm text-gray-600">
                Do you have an account?{' '}
                <Link href="/user/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign in
                </Link>
            </p>
        </section>
    )
}
export default Register
