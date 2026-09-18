import type { Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Anuj Negi | Full-Stack Developer",
  description:
    "Portfolio of Anuj Negi, a Full-Stack Developer specializing in React, Next.js, Node.js, Express.js, and MongoDB.",
};

export default function RootLayout({
  children,
 }:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
