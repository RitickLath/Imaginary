"use client";
import React, { useState } from "react";

const VideoCard = ({ title, posterUrl, videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-[220px] md:max-w-[260px] lg:max-w-[280px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video or Poster */}
      <div className="relative overflow-hidden aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 group">
        {isHovered ? (
          <video
            poster={posterUrl}
            className="w-full h-full object-cover transition-transform duration-500 transform scale-110"
            loop
            autoPlay
            muted
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={posterUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
          />
        )}

        {/* Play Button (Visible when not hovering) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <button className="bg-white p-2 rounded-full shadow-lg text-gray-700 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-6.584-3.794A1 1 0 007 8.197v7.606a1 1 0 001.168.978l6.584-3.794a1 1 0 000-1.707z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Card Footer with Title */}
      <div className="p-4 text-center bg-gradient-to-r from-[var(--from)] to-[var(--to)] ">
        <h3 className="text-sm md:text-lg font-bold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;

//
