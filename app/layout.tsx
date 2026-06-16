import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import siteConfig from "@/site.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  icons: {
    icon: siteConfig.seo.favicon,
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Inject theme CSS variables
  const themeStyle = `
    :root {
      --accent: ${siteConfig.theme.accent};
      --bg: ${siteConfig.theme.background};
      --surface: ${siteConfig.theme.surface};
      --text: ${siteConfig.theme.text};
      --muted: ${siteConfig.theme.muted};
    }
  `;

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeStyle }} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
