import { getAllPostIds, getPostData } from "../../lib/posts";
import Metadata from "../../components/metadata";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Separator from "../../components/separator";
import Footer from "../../components/footer";

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
          <nav className="cs11 ce12 nav">
            <Link href="../about">about</Link>
            <Link href="../collection">collection</Link>
          </nav>
        </header>
        <Separator />
        <div className="grid flex-start">
          <div className="cs1 ce12">
            <br />
            <h1 className="title-link">{postData.title}</h1>
          </div>
          <div className="cs1 ce4 dimensions">
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
          <div className="cs5 ce12">
            <small>{postData.body}</small>
          </div>
        </div>
        <Separator />

        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className="cs1 ce12"
        />
        <div className="grid footer">
          <div className="cs1 ce12 flex space-between">
            <Link href="../posts/2-paraceramica">
              <h5>← [Paracemarica]</h5>
            </Link>
            <Link href="../posts/4-swell">
              <h5>[Swell] →</h5>
            </Link>
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
}
