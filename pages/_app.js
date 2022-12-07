import "/node_modules/fluiditype/fluidtype.css";
import "../styles/fluidigrid.css";
import "../styles/styles.css";
import { Cormorant } from "@next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={cormorant.className}>
      <Component {...pageProps} />
    </main>
  );
}
