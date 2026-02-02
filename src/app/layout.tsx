import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Facebook - Social Network",
  description: "Connect with friends and the world around you on Facebook.",
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
