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
              <a>
                <Image src="/back.svg" width={44} height={44} />
              </a>
            </Link>
          </div>
          <nav className="cs11 ce12 nav">
            <Link href="./about">
              <a>about</a>
            </Link>
            <br />
            <Link href="./collection">
              <a>collection</a>
            </Link>
            <br />
            <Link href="mailto:john@example.com?subject=Hello">
              <a>contact</a>
            </Link>
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
