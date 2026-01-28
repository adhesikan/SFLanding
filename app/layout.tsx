import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stock Fundamentals | Rules-Based Stock Trade Ideas",
  description:
    "Stock Fundamentals delivers rules-based stock trade ideas with a dashboard, push notifications, and historical backtests for educational purposes.",
  openGraph: {
    title: "Stock Fundamentals",
    description:
      "Rules-based stock trade ideas delivered to your dashboard with push alerts. Educational, transparent, and backtest-driven.",
    url: "https://www.strategyfundamentals.com",
    siteName: "Stock Fundamentals",
    type: "website"
  },
  metadataBase: new URL("https://www.strategyfundamentals.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5FJHHFSH');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FJHHFSH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
