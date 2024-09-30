import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

// Metadata for the app
export const metadata = {
  title: "Imaginary",
  description:
    "Transform your images with ease using our user-friendly interface and state-of-the-art AI algorithms. Our tools are designed to cater to both casual users and professional photographers, providing high-quality results that save you time and effort. Experience the future of photo editing with Imaginary and elevate your images to new heights.",
};

// Styles
const layoutStyles = {
  bodyWrapper: "mt-[4rem] w-full overflow-x-hidden min-h-screen flex",
  sidebarMargin: "sm:ml-[15rem] mt-12 sm:mt-0 flex justify-center w-full",
  contentContainer: "relative w-full max-w-5xl",
  minHeight: { minHeight: "calc(100vh - 4rem)" },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <div
            style={layoutStyles.minHeight}
            className={layoutStyles.bodyWrapper}
          >
            <Sidebar />
            <div className={layoutStyles.sidebarMargin}>
              <div className={layoutStyles.contentContainer}>
                {children}
                <h1 className="absolute bottom-2 left-[30%] md:left-[40%] text-sm font-medium text-center pb-2 text-[var(--primary-purple)]">
                  Made with 💖 by Ritick Lath.
                </h1>
              </div>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
