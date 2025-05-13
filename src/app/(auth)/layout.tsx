import React from "react";
import Navbar from "@/components/Navbar";

export default function Layout({children}: Readonly<{children:React.ReactNode}>) {
    return (
        <main className="black-500">
            <Navbar />
            {children}
        </main>
    )
}