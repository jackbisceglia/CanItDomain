import "./globals.css";

import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "CanItDomain",
  description: "Find Domain Endings for Your Search Term",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} font-extralight bg-fog-900 p-16 text-center w-full h-screen text-fog-100 flex flex-col`}
      >
        <nav className="mx-auto">
          <h2 className="my-2 text-6xl">
            CanItDoma<span className="font-extrabold text-rose-500">in</span>?
          </h2>
          <p className="py-2 text-lg page-desc">
            Choose the appropriate domain ending for your website.
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
