import {
  FaHome,
  FaCrop,
  FaMagic,
  FaRuler,
  FaImage,
  FaWrench,
  FaFillDrip,
  FaEdit,
} from "react-icons/fa";
import VideoCard from "../component/VideoCard";
import { videoCardsData } from "../constants/VideoImage";
import Link from "next/link";

const facilities = [
  { name: "Home", link: "/", icon: <FaHome className="w-4 h-4" /> },
  {
    name: "Round Corner",
    link: "/round-corner",
    icon: <FaCrop className="w-4 h-4" />,
  },
  {
    name: "AI Image Enhancer",
    link: "/ai-image-enhancer",
    icon: <FaMagic className="w-4 h-4" />,
  },
  { name: "Sharpen", link: "/sharpen", icon: <FaRuler className="w-4 h-4" /> },
  {
    name: "Background Removal",
    link: "/bg-removal",
    icon: <FaImage className="w-4 h-4" />,
  },
  {
    name: "Generative Restore",
    link: "/generative-restore",
    icon: <FaWrench className="w-4 h-4" />,
  },
  {
    name: "Generative Fill",
    link: "/generative-fill",
    icon: <FaFillDrip className="w-4 h-4" />,
  },
  {
    name: "Generative Replace",
    link: "/generative-replace",
    icon: <FaEdit className="w-4 h-4" />,
  },
];

export default function Home() {
  return (
    <div className="py-6 px-3 lg:px-8 w-full flex flex-col items-center">
      <div className="px-4 md:px-10 bg-gradient-to-r from-[var(--from)] to-[var(--to)]  rounded-lg shadow-md  w-full md:w-[80%] flex flex-col items-center">
        <h1 className="text-xl font-serif font-semibold lg:text-3xl lg:font-semibold text-center max-w-[500px]   mt-6 lg:mt-12 ">
          IMAGINARY: REIMAGINE YOUR SHOTS
          {/* Bring Your Creative Vision <br /> to Life with Imaginary */}
        </h1>

        {/* AI Facilities Section */}
        <div className="mt-6 mb-6 lg:mb-12 lg:mt-12 grid grid-cols-4 gap-2 sm:gap-4">
          {facilities.map((facility, index) => (
            <Link
              href={facility.link || ""}
              key={index}
              className="flex flex-col items-center"
            >
              <div className="shadow-xl p-3 rounded-full mb-2 flex items-center justify-center">
                {facility.icon}
              </div>
              <span className="  text-center text-xs sm:text-sm md:text-base">
                {facility.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="p-4 flex flex-wrap gap-4 justify-center">
          {videoCardsData.map((data, k) => (
            <VideoCard
              key={k}
              title={data.title}
              posterUrl={data.posterUrl}
              videoUrl={data.videoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
