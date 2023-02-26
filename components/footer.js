import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="grid footer">
      <h5 className="cs1 ce4 name">Kristiyan Dyankov ©</h5>
      <div className="cs7 ce12 flex space-between">
        <Link href="/about">about</Link>
        <br />
        <Link href="./collection">collection</Link>
        <br />
        <Link href="mailto:dyankovv@gmail.com?subject=Hello">contact</Link>
        <br />
        <Link
          href="https://www.instagram.com/kristianplus1/"
          target="_blank"
          className="flex"
        >
          instagram
        </Link>
        <br />
      </div>
    </footer>
  );
}
