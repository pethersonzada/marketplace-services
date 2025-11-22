import "../styles/global.css";


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <title>Marketplace Services</title>
      <body>{children}</body>
    </html>
  );
}

