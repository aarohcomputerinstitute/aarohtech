import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Manrope } from "next/font/google";
import ClientBody from "components/ClientBody";

import ThemeProvider from "theme/ThemeProvider";
import Progress from "components/Progress";
import ScrollCue from "components/ScrollCue";
import PageProgress from "components/common/PageProgress";
import WhatsAppButton from "components/common/WhatsAppButton";
// ANIMATE CSS
import "animate.css";
// SWIPER CSS
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// REACT VIDEO PLYR CSS
import "plyr-react/plyr.css";
// G-LIGHTBOX CSS
import "glightbox/dist/css/glightbox.css";
// SCROLL CUE CSS
import "plugins/scrollcue/scrollCue.css";
// BOOTSTRAP & CUSTOM CSS
import "assets/scss/style.scss";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aarohcomputerclasses.in"),
  title: {
    default: "Aaroh Tech and AI Institute | Best Computer Classes in Jaipur",
    template: "%s | Aaroh Tech and AI Institute",
  },
  description: "Aaroh Tech and AI Institute is the best computer training center in Jaipur. We offer professional courses in Full Stack Web Development, AI & Automation, Data Analytics, Digital Marketing, and more with industry-recognized certification.",
  keywords: ["Computer Institute in Jaipur", "Full Stack Web Development Course", "AI Training", "Data Analyst Course", "Digital Marketing Jaipur", "Aaroh Computer Classes"],
  authors: [{ name: "Aaroh Tech and AI Institute" }],
  creator: "Aaroh Tech",
  publisher: "Aaroh Tech and AI Institute",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aarohcomputerclasses.in",
    siteName: "Aaroh Tech and AI Institute",
    title: "Aaroh Tech and AI Institute | Best Computer Training in Jaipur",
    description: "Learn Full Stack Web Development, AI, Data Analytics, and more at the top-rated computer institute in Jaipur. Get certified and boost your career.",
    images: [
      {
        url: "/img/logo-aaroh.png",
        width: 800,
        height: 600,
        alt: "Aaroh Tech and AI Institute Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaroh Tech and AI Institute | Best Computer Training in Jaipur",
    description: "Professional computer courses with job-oriented training and certification in Jaipur.",
    images: ["/img/logo-aaroh.png"],
  },
  icons: {
    icon: "/img/logo-aaroh.png",
    shortcut: "/img/logo-aaroh.png",
    apple: "/img/logo-aaroh.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={manrope.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientBody>
          <ThemeProvider>
            <PageProgress />
            <Progress />
            <ScrollCue />
            <WhatsAppButton />
            {children}
          </ThemeProvider>
        </ClientBody>
      </body>
    </html>
  );
}
