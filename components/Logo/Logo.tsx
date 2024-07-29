"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export function Logo() {
    const router = useRouter()
    return (
        <div className="h-20 flex items-center px-6 border-b cursor-pointer" onClick={() => router.push("/")}>
            <Image 
                src="/logoipsum-297.svg" 
                alt="Logo" 
                width={100} 
                height={100} 
                priority 
            />
            <h1 className="font-bold text-xl ml-2">TarreManager</h1> {/* Añade margen a la izquierda del texto */}
        </div>
    )
}
