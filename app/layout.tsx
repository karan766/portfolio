import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import StructuredData from "@/components/StructuredData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://karansinghsodhi.vercel.app'),
  title: "Karan Singh Sodhi - Software Engineer | Full Stack Developer",
  description: "Entry-level Software Engineer with hands-on experience in MERN stack, Next.js, and real-time web applications. Experienced with AWS, Docker, and CI/CD. Available for internships and full-time opportunities.",
  keywords: ["Software Engineer", "Full Stack Developer", "MERN Stack", "Next.js", "React", "Node.js", "MongoDB", "AWS", "Docker", "Portfolio"],
  authors: [{ name: "Karan Singh Sodhi" }],
  creator: "Karan Singh Sodhi",
  publisher: "Karan Singh Sodhi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karansinghsodhi.vercel.app",
    title: "Karan Singh Sodhi - Software Engineer Portfolio",
    description: "Entry-level Software Engineer specializing in full-stack development with MERN stack and modern web technologies.",
    siteName: "Karan Singh Sodhi Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karan Singh Sodhi - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Singh Sodhi - Software Engineer Portfolio",
    description: "Entry-level Software Engineer specializing in full-stack development with MERN stack and modern web technologies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
