import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Rick and Morty Index</title>
        <meta name="description" content="Rick and Morty Index" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-slate-900 text-slate-50 antialiased">{children}</body>
    </html>
  );
}
