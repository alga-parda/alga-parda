'use client'

import { useRouter } from "next/navigation";

export default function ArtistBanner() {
    const router = useRouter();

    return (
        <div className="bg-cyan-700 h-[640px] w-[300px] flex-shrink-0 hover:cursor-pointer" onClick={() => router.push('/')}></div>
    )
}
