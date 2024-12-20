import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShadCN UI Addons",
  description:
    "Enhance your UI with powerful addons for shadcn-ui, designed to extend functionality and streamline your development workflow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google site verification */}
        <meta name="google-site-verification" content="m3gcO3z77CpmDFtlEBa5Qk-g2yMOUvIFj34TKqbJMoU" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          <main className="flex-1 overflow-auto p-8 pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
