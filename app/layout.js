import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO
export const metadata = {
  title: "Ekele - React Developer & Next.js Expert in Nigeria",
  description:
    "I am Ekele, a skilled React Developer and Next.js expert with experience in building modern, responsive web applications. Explore my portfolio to see my projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="React Developer, Next.js Expert, Frontend Developer, JavaScript, TypeScript, Web Developer in Nigeria"
        />
        <meta name="author" content="Ekele" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="/access/ekele1.jpg" // Replace with your image URL
        />
        <meta
          property="og:url"
          content="https://resume-inky-delta.vercel.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="/access/ekele.png.jpg" // Replace with your image URL
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Preload the font for performance */}
        <link
          rel="preload"
          href={`https://fonts.googleapis.com/css2?family=Inter&display=swap`}
          as="style"
        />
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Inter&display=swap`}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
