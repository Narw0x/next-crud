import React from 'react'
import Link from "next/link";

const Navbar = async () => {
    return (
        <header className="max-w-[70%] m-auto">
            <nav className="flex flex-row mx-auto my-4">
                <div className="flex items-center justify-between basis-1/3">
                    <Link href="/">Logo</Link>
                </div>
                <div className="flex gap-4 basis-1/3 justify-center">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </div>
                <div className="flex gap-4 basis-1/3 justify-end">
                    {/*{ ?(*/}
                    {/*    <>*/}
                    {/*        <Link href={`/profile/${session?.id}`}>*/}
                    {/*            <span>{session?.user?.name}</span>*/}
                    {/*        </Link>*/}
                    {/*        <form action={async () => {*/}
                    {/*            "use server";*/}
                    {/*        }}>*/}
                    {/*            <button type="submit" className="cursor-pointer">*/}
                    {/*                Logout*/}
                    {/*            </button>*/}
                    {/*        </form>*/}
                    {/*    </>*/}
                    {/*):(*/}
                        <>
                            <Link href="/user/login">
                                <span>
                                    Sign in
                                </span>
                            </Link>
                            <Link href="/user/register">
                                <span>
                                    Sign up
                                </span>
                            </Link>
                        </>
                    {/*)}*/}
                </div>
            </nav>
        </header>
    )
}
export default Navbar
