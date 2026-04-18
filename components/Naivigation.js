import Link from "next/link";

const Navigation = () => {

    return (
        <>
            <p>Abdul Kadir Khan LOGO</p>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/service">Service</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Navigation;