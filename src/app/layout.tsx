import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

// ✅ We can define metadata here because this is a server component
export const metadata = {
  title: "My Dark Portfolio",
  description: "A flashy black-themed portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* We are now a server component, so we can keep metadata */}
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        {/* Import the client component for the animated header */}
        <Header />
        <main className="flex-grow">{children}</main>
        <footer className="bg-black py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Chris. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
