import { Providers } from "@/src/lib/providers";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import "../styles/index.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Shop",
  description: "Green Shop",
};

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
        </body>
      </html>
    </Providers>
  );
}
