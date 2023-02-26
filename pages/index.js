import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Metadata from "../components/metadata";

export default function Home() {
  return (
    <div className="main-container grid index-bg">
      <Metadata />

      <header className="grid cs1 ce12 header">
        <div className="cs1 ce8 flex">
          <h5 className="name">Kristiyan Dyankov</h5>
        </div>
        <nav className="cs11 ce12 nav">
          <Link href="/about">about</Link>
          <br />
          <Link href="./collection">collection</Link>
        </nav>
      </header>

      <main className="cs1 ce12">
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
            <Link href="/collection" className="center">
              <motion.video
                className="reel"
                playsInline=""
                loop="loop"
                muted="muted"
                autoPlay="autoplay"
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
            </Link>
          </div>
          <div className="cs1 ce12 ">
            <Link href="/collection" className="center">
              View the collection
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
