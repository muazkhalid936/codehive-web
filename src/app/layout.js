// src/app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextTopLoader from "nextjs-toploader";

// Metadata export (server-side)
export const metadata = {
  title: "Code Hive",
  description: "Code Hive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Code Hive" />
      </head>
      <body>
        <NextTopLoader showSpinner={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
