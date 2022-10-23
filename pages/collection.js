import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Collection() {
  return (
    <div className="main-container grid">
      <Head>
        <title>Kristyan Dyankov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="grid cs1 ce12">
        <div className="cs1 ce10">
          <Link href="/">
            <a>Back</a>
          </Link>
        </div>
        <nav className="cs11 ce12">
          <Link href="/">
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
      <hr />

      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce7">
            <Image src="/main.png" width={1200} height={920} />
          </div>
          <div className="cs8 ce12">
            <Link href="./collection">
              <a>
                <h1>
                  Combining the power of{" "}
                  <bold>clay printing & recycled clay</bold>↗
                </h1>
              </a>
            </Link>
          </div>
          <hr />

          <div className="cs1 ce7">
            <Link href="./collection">
              <a>
                <h1>A ritual of transportation and containment of water ↗</h1>
              </a>
            </Link>
          </div>
          <div className="cs8 ce12">
            <Image src="/traces-1.png" width={1200} height={720} />
          </div>
          <hr />

          <div className="cs1 ce12">
            <Link href="./collection">
              <a>
                <h1>Paracemarica ↗</h1>
              </a>
            </Link>
          </div>
          <div className="cs1 ce12">
            <video
              src="https://files.cargocollective.com/c884094/Para-ceramica.mp4"
              loop="loop"
              muted="muted"
              autoplay="autoplay"
            ></video>
          </div>
          <hr />

          <div className="cs1 ce4">
            <Image src="/swell-1.png" width={1200} height={900} />
          </div>
          <div className="cs5 ce12">
            <Image src="/swell-2.png" width={1800} height={900} />
          </div>
          <div className="cs10 ce12">
            <Link href="./collection">
              <a>
                <h1>Swell↗</h1>
              </a>
            </Link>
          </div>

          <hr />
          <div className="cs1 ce7">
            <Image src="/charcoal-1.png" width={1200} height={920} />
          </div>
          <div className="cs8 ce12">
            <Link href="./collection">
              <a>
                <h1>
                  Fighting <bold> fire with fire ↗</bold>
                </h1>
              </a>
            </Link>
          </div>

          <hr />

          <div className="cs1 ce5">
            <Link href="./collection">
              <a>
                <h1>Organica↗</h1>
              </a>
            </Link>
          </div>
          <div className="cs6 ce12">
            <Image src="/organica.png" width={1200} height={720} />
          </div>

          <hr />

          <div className="cs1 ce12">
            <Link href="./collection">
              <a>
                <h1>Duality↗</h1>
              </a>
            </Link>
          </div>
          <div className="cs1 ce12">
            <Image src="/duality-1.png" width={1800} height={900} />
          </div>
        </div>
      </main>
      <hr />
      <footer className="cs1 ce12">Designed with ❤️ by Boris Kirov</footer>
    </div>
  );
}
