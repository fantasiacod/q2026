import type { Metadata } from "next";
import { Tajawal, Amiri } from "next/font/google";
import "./globals.css";
import ClientComponents from "@/components/ClientComponents";
import SiteSettingsProvider from "@/components/SiteSettingsProvider";
import Script from "next/script";
import AdUnit from "@/components/AdUnit";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "Quran Memorization for Kids",
  description: "A professional platform for memorizing the Holy Quran",
  manifest: "/manifest.json",
  other: {
    "google-adsense-account": "ca-pub-7665067472184122"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body
        className={`${tajawal.variable} ${amiri.variable} font-tajawal antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7665067472184122"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <ClientComponents />
        <SiteSettingsProvider>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
            <AdUnit />
            {children}
            <AdUnit />
          </main>
        </SiteSettingsProvider>
        
        <footer className="w-full py-8 text-center bg-card/50 border-t border-border mt-auto">
          <div className="max-w-3xl mx-auto px-4">
            <p className="font-amiri text-xl text-primary/80 leading-loose">
              « صدقة جارية لي ولوالديّ ولزوجتي ولكل من مر من هنا »
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              نسأل الله القبول ولكم الأجر والمثوبة
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
