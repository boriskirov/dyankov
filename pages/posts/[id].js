import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div className="id-bg">
      <Head>
        <title>{postData.title}</title>
      </Head>

      <motion.div
        initial={{
          y: 0,
          opacity: 0,
        }}
        animate={{
          y: [10, 1],
          opacity: 1,
        }}
        transition={{ ease: "easeIn", duration: 0.35 }}
        className="main-container"
      >
        <header className="grid cs1 ce12">
          <div className="cs1 ce8">
            <Link href="/collection">
              <Image src="/back.svg" className="icon" width={44} height={44} />
            </Link>
          </div>
          <nav className="cs9 ce12 nav">
            <Link href="../about">about</Link>
            <br />
            <Link href="../collection">collection</Link>
            <br />
            <Link href="mailto:dyankovv@gmail.com?subject=Hello">contact</Link>
          </nav>
        </header>
        <h1>{postData.title}</h1>
        <br />
        <small>{postData.date}</small>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className="flex space-between">
          <Link href="../posts/2-paraceramica.md">
            <h2>← [Paracemarica]</h2>
          </Link>
          <Link href="../posts/4-swell.md">
            <h2>[Swell] →</h2>
          </Link>
        </div>
        <footer className="cs1 ce12 flex space-between">
          <Link href="/about">about</Link>
          <br />
          <Link href="./collection">collection</Link>
          <br />
          <Link href="mailto:dyankovv@gmail.com?subject=Hello">contact</Link>
        </footer>
      </motion.div>
    </div>
  );
}
