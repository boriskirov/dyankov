import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container grid">
      <Head>
        <title>Kristyan Dyankov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="grid cs1 ce12">
        <Link href="/">
          <a className="cs1 ce10">
            <h2>Kristiyan Dyankov</h2>
          </a>
        </Link>
        <nav className="cs11 ce12">
          <Link href="/about">
            <a>about</a>
          </Link>
          <br />
          <Link href="./collection">
            <a>collection</a>
          </Link>
          <br />
          <Link href="./">
            <a>contact</a>
          </Link>
        </nav>
      </header>

      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs3 ce10">
            <video
              playsinline=""
              loop="loop"
              muted="muted"
              autoplay="autoplay"
              poster="https://formelstudio.com/thumbs/home/formel-500x281-q60.jpg"
              src="https://files.cargocollective.com/c884094/10.mp4"
            ></video>
          </div>
          <div className="cs6 ce12 flex-items-center">
            <Link href="./collection">
              <a>Check the collection</a>
            </Link>
            <Image src="/project.svg" width={48} height={48} />
          </div>
        </div>
      </main>

      <footer className="cs1 ce12">Designed with ♡ by Boris Kirov</footer>
    </div>
  );
}
