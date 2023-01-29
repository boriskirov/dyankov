import { getAllPostIds, getPostData } from "../../lib/posts";
import Metadata from "../../components/metadata";
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
      <Metadata title={postData.title} />

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
        <div className="grid">
          <div className="cs1 ce7">
            <h5>{postData.title}</h5>
            <small>{postData.body}</small>
            <ul>
              <li>
                <small>{postData.date}</small>
              </li>
              <li>
                <small>{postData.dimensions}</small>
              </li>
              <li>
                <small>{postData.material}</small>
              </li>
              <li>
                <small>{postData.photos}</small>
              </li>
            </ul>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            className="cs1 ce12"
          />
        </div>

        <footer className="grid">
          <div className="cs1 ce12 flex space-between">
            <Link href="../posts/2-paraceramica">
              <h5>← [Paracemarica]</h5>
            </Link>
            <Link href="../posts/4-swell">
              <h5>[Swell] →</h5>
            </Link>
          </div>
          <div className="cs1 ce12 flex">
            <Link href="/about">about</Link>
            <br />
            <Link href="./collection">collection</Link>
            <br />
            <Link href="mailto:dyankovv@gmail.com?subject=Hello">contact</Link>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
