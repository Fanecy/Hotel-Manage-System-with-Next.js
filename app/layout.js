import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

export const metadata = {
  title: {
    template: "%s || The Wild Oasis",
    default: "欢迎 || The Wild Oasis",
  },
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

function RootLayout({ children }) {
  return (
    <html lang="ch">
      <body
        className={`${josefin.className}bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
