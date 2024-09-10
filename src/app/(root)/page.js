import { FaHome, FaCrop, FaMagic, FaRuler, FaImage } from "react-icons/fa";
import VideoCard from "../component/VideoCard";
import { videoCardsData } from "../constants/VideoImage";

const facilities = [
  {
    name: "Corners",
    icon: <FaCrop className="text-white w-4 h-4" />,
  },
  {
    name: "Image Enhancer",
    icon: <FaMagic className="text-white w-4 h-4" />,
  },
  {
    name: "Sharpen",
    icon: <FaRuler className="text-white w-4 h-4" />,
  },
  {
    name: "Background Removal",
    icon: <FaImage className=" text-white w-4 h-4" />,
  },
];

export default function Home() {
  return (
    <div className="py-6 px-3 lg:px-8 w-full flex flex-col items-center">
      <div className="px-4 md:px-10 bg-gradient-to-r from-[#3B1179] to-[#4C2EA5]  rounded-lg shadow-md  w-full md:w-[80%] flex flex-col items-center">
        <h1 className="text-xl lg:text-3xl lg:font-semibold text-center max-w-[400px] text-white mt-6 lg:mt-12 ">
          Bring Your Creative Vision <br /> to Life with Imaginary
        </h1>

        {/* AI Facilities Section */}
        <div className="mt-6 mb-6 lg:mb-12 lg:mt-12 grid grid-cols-4 gap-2 sm:gap-4">
          {facilities.map((facility, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#6C5BFF] p-3 rounded-full mb-2 flex items-center justify-center">
                {facility.icon}
              </div>
              <span className="text-white text-center text-xs sm:text-sm md:text-base">
                {facility.name}
              </span>
            </div>
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
