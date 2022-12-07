import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="main-container grid">
      <Head>
        <title>Kristyan Dyankov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="grid cs1 ce12">
        <h6 className="cs1 ce10">Kristiyan Dyankov</h6>
        <nav className="cs11 ce12 nav">
          <Link href="/about">about</Link>
          <br />
          <Link href="./collection">collection</Link>
          <br />
          <Link href="mailto:john@example.com?subject=Hello">contact</Link>
        </nav>
      </header>

      <main className="cs2 ce11">
        <div className="grid">
          <div className="cs1 ce12">
            <motion.p
              className="title"
              initial={{
                y: 0,
                opacity: 1,
              }}
              animate={{
                y: [0, 1],
                opacity: 0,
              }}
              transition={{ ease: "easeIn", duration: 2.75 }}
            >
              Kristiyan Dyankov
            </motion.p>
          </div>
          <div className="cs1 ce12">
            <motion.video
              playsinline=""
              loop="loop"
              muted="muted"
              autoplay="autoplay"
              poster="https://i.ibb.co/j80ZtQx/main.jpg"
              src="https://files.cargocollective.com/c884094/10.mp4"
              initial={{
                y: 0,
                opacity: 0,
              }}
              animate={{
                y: [0, 1],
                opacity: 1,
              }}
              transition={{ ease: "easeIn", duration: 1.75 }}
            ></motion.video>
          </div>
          <div className="cs1 ce12 ">
            <Link href="/collection" className="center">
              View the collection
            </Link>
          </div>
        </div>
      </main>

      <footer className="cs1 ce12">Designed with ♡ by Boris Kirov</footer>
    </div>
  );
}
