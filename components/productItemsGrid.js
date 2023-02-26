import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function ProductGrid() {
  return (
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
  );
}
