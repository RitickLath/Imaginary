import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Metadata for the app
export const metadata = {
  title: "Imaginary",
  description:
    "Transform your images with ease using our user-friendly interface and state-of-the-art AI algorithms. Our tools are designed to cater to both casual users and professional photographers, providing high-quality results that save you time and effort. Experience the future of photo editing with Imaginary and elevate your images to new heights.",
};

// Styles
const layoutStyles = {
  bodyWrapper: "mt-[4rem] w-full overflow-x-hidden min-h-screen flex flex-col",
  sidebarMargin: "ml-[3rem] sm:ml-[15rem] flex justify-center w-full",
  contentContainer: "w-full max-w-5xl",
  minHeight: { minHeight: "calc(100vh - 4rem)" },
  footer:
    "mt-auto text-[#b888ff] ml-[3rem] sm:ml-[15rem] text-center text-sm text-gray-600 py-3",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <div
            style={layoutStyles.minHeight}
            className={layoutStyles.bodyWrapper}
          >
            <Sidebar />
            <div className={layoutStyles.sidebarMargin}>
              <div className={layoutStyles.contentContainer}>{children}</div>
            </div>
          </div>
          <footer className={layoutStyles.footer}>
            Made with 💖 by Ritick Lath
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
