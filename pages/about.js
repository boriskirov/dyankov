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
            <a>
              <Image src="/back.svg" width={44} height={44} />
            </a>
          </Link>
        </div>
        <nav className="cs11 ce12">
          <Link href="./about">
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
          <div className="cs1 ce6">
            <h2>
              “Coming from a DIY background, I am drawn to working with my two
              hands and understanding how things work. In my work I like to play
              with textures and solve problems on various scales. The tools of
              digital fabrication and material knowledge are essential for my
              work.”
            </h2>
          </div>
          <div className="cs7 ce12">
            <Image src="/me.png" width={1440} height={1800} />
          </div>
          <div className="cs1 ce6">
            <h2>
              Kristiyan is born in Sofia, Bulgaria, currently following a
              product design course at the Willem de Kooning Academy, Rotterdam.
              After internshipping in the architectural bureau Aedes, and worked
              for the SEG in Sofia, he decided to take turn and get his degree
              in product design in the Netherlands. His experience with spatial
              design and various manufacturing techniques positions him in
              between the two majors.
            </h2>
          </div>
        </div>
      </main>
      <footer className="cs1 ce12">Designed with ♡ by Boris Kirov</footer>
    </div>
  );
}
