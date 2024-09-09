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
import { IoSparkles } from "react-icons/io5";
import { SignOutButton } from "@clerk/nextjs";

const menus = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "Round Corner",
    link: "/round-corner",
    icon: <FaCrop />,
  },
  {
    name: "AI Image Enhancer",
    link: "/ai-image-enhancer",
    icon: <FaMagic />,
  },
  {
    name: "Sharpen",
    link: "/sharpen",
    icon: <FaRuler />,
  },
  {
    name: "Background Removal",
    link: "/bg-removal",
    icon: <FaImage />,
  },
  {
    name: "Generative Restore",
    link: "/generative-restore",
    icon: <FaWrench />,
  },
  {
    name: "Generative Fill",
    link: "/generative-fill",
    icon: <FaFillDrip />,
  },
  {
    name: "Generative Replace",
    link: "/generative-replace",
    icon: <FaEdit />,
  },
];

const Sidebar = () => {
  const { userId } = auth();

  return (
    <div className="fixed w-[3rem] sm:w-[14rem] bg-[var(--form-background)] h-screen border-r-[1.5px] border-[var(--bordermargin)] flex flex-col">
      <div className=" bg-[var(--form-background)]">
        <div className="lg:pr-6 pr-3 border-b-[1.5px] pb-6 border-[var(--bordermargin)] ">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className="pl-3 lg:pl-6 w-full flex items-center space-x-3 font-normal hover:text-[#B888FF] cursor-pointer pt-4"
            >
              {menu.icon}
              <span className="w-full whitespace-nowrap hidden sm:flex">
                {menu.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Section for Profile and Buy Credit */}
      <div className="pl-3 lg:pl-6 bg-[var(--form-background)] lg:pr-6 pr-3 ">
        <Link
          href="/profile"
          className="flex items-center space-x-3 font-normal hover:text-[#B888FF] cursor-pointer pt-4"
        >
          <FaUser />
          <span className="hidden sm:flex">Profile</span>
        </Link>
        <Link
          href="/buy-credit"
          className="flex items-center space-x-3 font-normal hover:text-[#B888FF] cursor-pointer pt-4"
        >
          <FaCreditCard />
          <span className="hidden sm:flex">Buy Credit</span>
        </Link>
        {userId ? (
          <SignOutButton>
            <div className="flex items-center space-x-3 font-normal hover:text-[#B888FF] cursor-pointer pt-4">
              <IoIosLogOut />
              <span className="hidden sm:flex">Log Out</span>
            </div>
          </SignOutButton>
        ) : (
          <Link
            href="/sign-in"
            className="flex items-center space-x-3 font-normal hover:text-[#B888FF] cursor-pointer pt-4"
          >
            <IoIosLogIn />
            <span className="hidden sm:flex">Log In</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
