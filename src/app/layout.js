import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./component/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imaginary",
  description:
    "Transform your images with ease using our user-friendly interface and state-of-the-art AI algorithms. Our tools are designed to cater to both casual users and professional photographers, providing high-quality results that save you time and effort. Experience the future of photo editing with Imaginary and elevate your images to new heights.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="w-full overflow-x-hidden min-h-screen bg-black text-white flex">
            <Sidebar />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
