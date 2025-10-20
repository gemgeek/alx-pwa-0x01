import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to the Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Set the theme color for the browser UI */}
        <meta name="theme-color" content="#FFFFFF" /> 
        
        {/* Apple Touch Icon for iOS devices */}
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png"></link>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
