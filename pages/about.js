import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Metadata from "../components/metadata";
import Footer from "../components/footer";

export default function Collection() {
  return (
    <div className="main-container grid about-bg">
      <Metadata />

      <header className="grid cs1 ce12 header">
        <div className="cs1 ce9">
          <Link href="/">
            <Image src="/back.svg" className="icon" width={24} height={24} />
          </Link>
        </div>
        <nav className="cs11 ce12 nav">
          <Link href="./about">about</Link>
          <br />
          <Link href="./collection">collection</Link>
        </nav>
      </header>

      <motion.main
        className="cs1 ce12"
        initial={{
          y: 0,
          opacity: 0,
        }}
        animate={{
          y: [10, 1],
          opacity: 1,
        }}
        transition={{ ease: "easeIn", duration: 0.35 }}
      >
        <div className="grid">
          <div className="cs1 ce4 sticky">
            <Image src="/me.png" width={1280} height={980} />
          </div>
          <div className="cs5 ce12 grid">
            <p className="cs2 ce12">
              “Coming from a DIY background, I am drawn to working with my two
              hands and understanding how things work. In my work I like to play
              with textures and solve problems on various scales. The tools of
              digital fabrication and material knowledge are essential for my
              work.” <br />
            </p>
            <p className="cs2 ce12">
              <br />
              Kristiyan is born in Sofia, Bulgaria, currently following a
              product design course at the Willem de Kooning Academy, Rotterdam.
              After internshipping in the architectural bureau Aedes, and worked
              for the SEG in Sofia, he decided to take turn and get his degree
              in product design in the Netherlands. His experience with spatial
              design and various manufacturing techniques positions him in
              between the two majors.
            </p>
            <div className="flex cs2 ce12">
              <Link
                href="https://www.linkedin.com/in/kristiyan-dyankov/"
                target="_blank"
              >
                <Image
                  src="/linkedin.svg"
                  className="icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.instagram.com/kristianplus1/"
                target="_blank"
              >
                <Image
                  src="/instagram.svg"
                  className="icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="mailto:dyankovv@gmail.com?subject=Hello">
                <Image
                  src="/mail.svg"
                  className="icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </motion.main>
    </div>
  );
}
