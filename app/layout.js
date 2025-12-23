import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

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
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 ">
          <main className="max-w-7xl m-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
