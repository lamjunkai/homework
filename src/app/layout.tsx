import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photo - Social Network",
  description: "A social network for sharing photos and memories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
