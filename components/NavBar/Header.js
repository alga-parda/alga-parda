'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/alga-parda.png"
import NewsModal from "./NewsModal";

export default function Header() {
    const router = useRouter();

    const [newsModalOpen, setNewsModalOpen] = useState(false)

    function handleClose() {
        setNewsModalOpen(!newsModalOpen)
    }

    return (
    <header className="fixed z-10 top-0 h-1/2 w-full">
        <div className="bg-algae">
            <Image
                alt="alga parda logo"
                src={logo}
                className="cursor-pointer"
                style={{
                    maxWidth: '250px',
                    height: 'auto',
                    margin: 'auto',
                    paddingTop: '20px'
                }}
                onClick={() => router.push('/')}
            />
            <div className="flex pb-4 justify-between w-[500px] m-auto pt-2">
                <button 
                    type="button"
                    onClick={() => router.push('/sobre')}
                >sobre</button>
                <button
                    type="button"
                    onClick={handleClose}
                >assine nosso newsletter</button>
                <button 
                    type="button"
                    onClick={() => router.push('/contato')}
                >contato</button>
            </div>
        </div>

        <NewsModal 
            isOpen={newsModalOpen}
            onClose={handleClose}
        />
    </header>
    )
}