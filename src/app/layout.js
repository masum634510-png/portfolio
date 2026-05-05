import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

import ThemeProvider from "../components/ThemeProvider";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";

export const metadata = {
  title: "Md Masum | Frontend Developer Portfolio",
  description: "Portfolio of Md Masum, a Frontend Developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-slate-50 dark:bg-midnight text-slate-800 dark:text-slate-300 font-inter antialiased overflow-x-hidden transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
