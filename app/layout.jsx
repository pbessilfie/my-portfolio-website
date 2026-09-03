import './globals.css';

export const metadata = {
  title: 'Prince Essilfie Bondzie',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/peb-favicon.png" />
        <link rel="apple-touch-icon" href="/assets/peb-favicon.png" />
        <link rel="stylesheet" href="/assets/index-Cq_hHsPf.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}



