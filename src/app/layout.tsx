import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Juan Jose Rivera",
  description: "Generated by create next app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-gradient-to-tr from-slate-100 to-gray-200 dark:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        <link rel="icon" href="/icon.ico" />
        <Providers>
          <NavBar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}

// className="light" style={{colorScheme: "light"}}
