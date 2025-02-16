import Link from "next/link";

export default function Header() {
    return (
        <header className="main-container fade-in">
            <Link href="/" className="text-center transition-all duration-300 hover:tracking-wider">
                <h1>Felipe Gaioski</h1>
            </Link>
            <nav>
                <Link href="/" className="text-center transition-all duration-300 hover:tracking-wider">Home</Link>
                <Link href="/gallery" className="text-center transition-all duration-300 hover:tracking-wider">Gallery</Link>
                <Link href="#" className="text-center transition-all duration-300 hover:tracking-wider">About</Link>
                <Link href="/gear" className="text-center transition-all duration-300 hover:tracking-wider">Gear</Link>
            </nav>
        </header>
    );
}
