import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
