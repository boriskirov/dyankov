import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Collection({ allPostsData }) {
  return (
    <div className="main-container grid">
      <Head>
        <title>Kristyan Dyankov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="grid cs1 ce12">
        <div className="cs1 ce10">
          <Link href="/">
            <Image
              src="/back.svg"
              className="back-button"
              width={44}
              height={44}
            />
          </Link>
        </div>
        <nav className="cs11 ce12 nav">
          <Link href="./about">about</Link>
          <br />
          <Link href="./collection">collection</Link>
          <br />
          <Link href="mailto:john@example.com?subject=Hello">contact</Link>
        </nav>
      </header>

      <main className="cs1 ce12">
        <section>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <motion.li
                key={id}
                className="product-item"
                whileHover={{ scale: 1.01 }}
                initial={{
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  y: [8, 1],
                  opacity: 1,
                }}
                transition={{ ease: "easeIn", duration: 0.15 }}
              >
                <Link href={`../posts/${id}`}>
                  <h1 className="title-link">{title}</h1>
                </Link>
                <br />
                <small>{date}</small>
              </motion.li>
            ))}
          </ul>
        </section>
      </main>
      <hr />
      <footer className="cs1 ce12">Designed with ♡ by Boris Kirov</footer>
    </div>
  );
}
