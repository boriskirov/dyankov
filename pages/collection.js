import Metadata from "../components/metadata";
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
    <div className="main-container grid collection-bg">
      <Metadata />

      <header className="grid cs1 ce12">
        <div className="cs1 ce8">
          <Link href="/">
            <Image src="/back.svg" className="icon" width={24} height={24} />
          </Link>
        </div>
        <nav className="cs10 ce12 nav">
          <Link href="./about">about</Link>
          <br />
          <Link href="./collection">collection</Link>
          <br />
          <Link href="mailto:dyankovv@gmail.com?subject=Hello">contact</Link>
        </nav>
      </header>

      <main className="cs1 ce12">
        <section>
          <ul className="product-items">
            {allPostsData.map(({ id, title, image }) => (
              <motion.a
                key={id}
                className="product-item"
                href={`../posts/${id}`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                initial={{
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  y: [10, 1],
                  opacity: 1,
                }}
                transition={{ ease: "easeIn", duration: 0.15 }}
              >
                <Image src={image} className="collection-image" fill />
                <h1 className="title-link">{title}</h1>
              </motion.a>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
