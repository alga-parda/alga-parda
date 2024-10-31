import Image from "next/image";
import logo from "../public/alga-parda.png"

export default function Header() {
    return (
        <header className="fixed w-full h-48 bg-algae">
            <Image
                alt="alga parda logo"
                src={logo} 
                style={{
                    maxWidth: '30%',
                    height: 'auto',
                    margin: 'auto',
                    paddingTop: '20px'
                }}
            />
            <span className="flex justify-between w-1/2 m-auto pt-2">
                <h1>sobre</h1>
                <h2>assine nosso newsletter</h2>
                <h3>contato</h3>
            </span>
        </header>
    )
}