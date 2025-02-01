import Link from "next/link";

export default function Header() {
    return (
        <header className="main-container fade-in bg-white">
            <Link href="/">
                <h1>Felipe Gaioski</h1>
            </Link>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="#">About</Link>
                <Link href="#">Contact</Link>
            </nav>
        </header>
    );
}
