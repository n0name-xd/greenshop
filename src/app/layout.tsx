import { Providers } from "@/src/lib/providers";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import "../styles/main.scss";

export default function RootLayout(
  props: React.PropsWithChildren
): JSX.Element {
  return (
    <Providers>
      <html className="wrapper" lang="en">
        <body>
          <Header />
          <main>{props.children}</main>
          <Footer />
          {/* <section className={styles.container}>
            <Nav />

            <footer className={styles.footer}>
              <span>Learn </span>
              <a
                className={styles.link}
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a
                className={styles.link}
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
            </footer>
          </section> */}
        </body>
      </html>
    </Providers>
  );
}
