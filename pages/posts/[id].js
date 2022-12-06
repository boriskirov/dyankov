import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <div className="main-container">
        <header className="grid cs1 ce12">
          <div className="cs1 ce10">
            <Link href="/collection">
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
        <h1>{postData.title}</h1>
        <small>{postData.date}</small>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div>
  );
}
