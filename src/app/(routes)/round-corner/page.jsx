import React from "react";
import { FaCrop } from "react-icons/fa";

const styles = {
  container: "py-6 px-3 lg:px-8 w-full",
  header: "px-4 md:px-10",
  title: "text-2xl flex space-x-3 items-center text-[#B888FF] font-semibold",
  formContainer: "mt-8 bg-gray-900 p-6 rounded-lg shadow-md",
  description: "text-gray-300 mb-6 text-xs lg:text-sm",
  label: "block text-lg font-medium text-gray-200 mb-2",
  inputText:
    "px-3 py-2 block w-full text-sm text-gray-200 border border-gray-700 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B888FF]",
  inputFile:
    "block w-full py-2 text-sm text-gray-400 border border-gray-700 rounded-lg cursor-pointer bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B888FF]",
  radioContainer: "flex items-center mb-2",
  radioInput: "w-4 h-4 text-purple-500 border-gray-500 focus:ring-purple-500",
  radioLabel: "ml-2 text-sm font-medium text-gray-300",
  submitButton:
    "bg-[#B888FF] text-white px-6 py-2 rounded-lg hover:bg-[#a078f7] focus:outline-none focus:ring-4 focus:ring-purple-500",
};

const RoundCorner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <FaCrop />
          <span>ROUND CORNER</span>
        </h1>
      </div>
      <div className={styles.formContainer}>
        <p className={styles.description}>
          Easily add rounded or circular edges to images with customizable
          corner radius. Perfect for embedding media in emails, PDFs, or apps,
          ensuring a sleek and consistent look across platforms.
        </p>
        <form action="" className="space-y-6">
          {/* Image Title */}
          <div>
            <label className={styles.label} htmlFor="title">
              Image Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Add Title"
              className={styles.inputText}
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className={styles.label} htmlFor="image">
              Choose the Image
            </label>
            <input
              type="file"
              id="image"
              className={styles.inputFile}
              required
            />
          </div>

          {/* Mode of Transform */}
          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">
              Mode of Transform
            </h2>
            <div className={styles.radioContainer}>
              <input
                type="radio"
                id="singleRadius"
                name="radius"
                className={styles.radioInput}
                required
              />
              <label htmlFor="singleRadius" className={styles.radioLabel}>
                Single Radius
              </label>
            </div>

            <div className={styles.radioContainer}>
              <input
                type="radio"
                id="maxRadius"
                name="radius"
                className={styles.radioInput}
                required
              />
              <label htmlFor="maxRadius" className={styles.radioLabel}>
                Maximum Radius
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className={styles.submitButton}>
              Transform
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoundCorner;
