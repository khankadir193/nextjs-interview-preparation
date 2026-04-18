import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/settings">Settings</Link></li>
      </ul>
      <h1 className={styles.title}>Hello World</h1>
    </div>
  );
}
