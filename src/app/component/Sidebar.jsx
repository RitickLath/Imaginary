import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import React from "react";
import {
  FaHome,
  FaCrop,
  FaMagic,
  FaRuler,
  FaImage,
  FaWrench,
  FaFillDrip,
  FaUser,
  FaCreditCard,
  FaEdit,
} from "react-icons/fa";
import { SignOutButton } from "@clerk/nextjs";

// styles
const sidebarStyles = {
  container:
    "fixed w-[3rem] sm:w-[15rem] bg-[var(--form-background)] h-screen border-r-[1.5px] border-[var(--bordermargin)] flex flex-col",
  menuContainer: "bg-[var(--form-background)]",
  menuItemContainer:
    "lg:pr-6 pr-3 border-b-[1.5px] pb-6 border-[var(--bordermargin)]",
  menuItem:
    "pl-3 lg:pl-6 w-full flex items-center space-x-3 font-normal hover:text-[#B888FF] cursor-pointer pt-4",
  menuText: "w-full whitespace-nowrap hidden sm:flex",
  bottomSection: "pl-3 lg:pl-6 bg-[var(--form-background)] lg:pr-6 pr-3",
  profileLink:
    "flex items-center space-x-3 font-normal hover:text-[#B888FF] cursor-pointer pt-4",
  buttonText: "hidden sm:flex",
};

// Menu items definition
const menus = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "Round Corner", link: "/round-corner", icon: <FaCrop /> },
  { name: "AI Image Enhancer", link: "/ai-image-enhancer", icon: <FaMagic /> },
  { name: "Sharpen", link: "/sharpen", icon: <FaRuler /> },
  { name: "Background Removal", link: "/bg-removal", icon: <FaImage /> },
  {
    name: "Generative Restore",
    link: "/generative-restore",
    icon: <FaWrench />,
  },
  { name: "Generative Fill", link: "/generative-fill", icon: <FaFillDrip /> },
  { name: "Generative Replace", link: "/generative-replace", icon: <FaEdit /> },
];

const Sidebar = () => {
  const { userId } = auth();

  return (
    <div className={sidebarStyles.container}>
      <div className={sidebarStyles.menuContainer}>
        <div className={sidebarStyles.menuItemContainer}>
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className={sidebarStyles.menuItem}
            >
              {menu.icon}
              <span className={sidebarStyles.menuText}>{menu.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Section for Profile and Buy Credit */}
      <div className={sidebarStyles.bottomSection}>
        <Link href="/profile" className={sidebarStyles.profileLink}>
          <FaUser />
          <span className={sidebarStyles.buttonText}>Profile</span>
        </Link>

        <Link href="/buy-credit" className={sidebarStyles.profileLink}>
          <FaCreditCard />
          <span className={sidebarStyles.buttonText}>Buy Credit</span>
        </Link>

        {userId ? (
          <SignOutButton>
            <div className={sidebarStyles.profileLink}>
              <IoIosLogOut />
              <span className={sidebarStyles.buttonText}>Log Out</span>
            </div>
          </SignOutButton>
        ) : (
          <Link href="/sign-in" className={sidebarStyles.profileLink}>
            <IoIosLogIn />
            <span className={sidebarStyles.buttonText}>Log In</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
