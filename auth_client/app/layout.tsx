import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from '@/redux/provider';
import "@/styles/globals.css";
import { Navbar, Footer} from '@/components/common'
import { Setup } from "@/components/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Auth",
  description: "Full Auth application that provides jwt authentification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Setup />
          <Navbar />
            <div>{children}</div>
          <Footer />
        </Provider>
        
      </body>
    </html>
  );
}
