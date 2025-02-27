import Navbar from "@/components/shared/Navbar";
import { connectMongo } from "@/services/mongo";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "The MovieDB App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white`}
      >
        <AuthProvider>
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </AuthProvider>

      </body>
    </html>
  );
}
