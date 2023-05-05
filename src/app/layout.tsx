import "./globals.css";

import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "CanItDomain",
  description: "Find Domain Endings for Your Search Term",
};
// vvv Gradient with hard stop vvv
// bg-gradient-to-b from-[#1b2832_24%] via-[#10171d_24%] to-fog-900

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} font-extralight bg-fog-900 px-6 py-16 sm:p-16 text-center w-full h-screen text-fog-100 flex flex-col`}
      >
        <nav className="mx-auto font-normal sm:max-w-screen-md sm:px-8">
          <h2 className="my-3 text-5xl sm:text-6xl">
            CanItDoma<span className="font-extrabold text-rose-500">in</span>?
          </h2>
          <p className="py-1 sm:text-xl page-desc">
            Check if your desired term ends in a valid domain ending
          </p>
          <p className="py-1 sm:text-xl page-desc">
            {"ie. canitdomain -> canitdoma.in"}
          </p>
        </nav>

        <main className="text-center items-center justify-start pt-20 flex flex-col max-w-[700px] w-full mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

// background-color: var(--bg);
// padding: 1rem;
// font-family: "Switzer", sans-serif;
// color: var(--light-text);
