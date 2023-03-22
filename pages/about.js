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
            “Coming from a DIY background, I am drawn to working with my two hands and understanding how things work. In my practice I
            focus on materials, textures and sustainable design and make them meet in my creations. I like change and can solve problems
             on various scales. My motto is: make sustainability attractive! As I recognize that we vote with our wallets and we buy with our eyes.
              As a digital native every project gets assessed to what degree can it be done by or with the help of a machine of digital fabrication.’’ <br />
            </p>
            <p className="cs2 ce12">
              <br />
              Kristiyan is a Bulgarian born, Rotterdam based product designer exploring the link between the aesthetic and the practical.
               In his work he often uses the means of digital fabrication to achieve form language that is otherwise difficult to reproduce by hand.
                Understanding the need to transition to sustainable practices in design and manufacturing is what sparked his interest in material
                 research and circular economy. He sees the designer as the medium between the industry, environment and market who is capable of
                  translating sustainable practices into attractive products.  
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
