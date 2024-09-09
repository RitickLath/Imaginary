import React from "react";
import { FaRuler } from "react-icons/fa";

const styles = {
  container: "py-6 px-3 lg:px-8 w-full",
  header: "px-4 md:px-10",
  title:
    "text-2xl flex space-x-3 items-center text-[var(--primary-purple)] font-semibold",
  formContainer: "mt-8 bg-[var(--form-background)] p-6 rounded-lg shadow-md",
  description: "text-[var(--description-text)] mb-6 text-xs lg:text-sm",
  label: "block text-lg font-medium text-[var(--form-text)] mb-2",
  inputFile:
    "block w-full py-2 text-sm text-[var(--input-placeholder)] border border-[var(--form-border)] rounded-lg cursor-pointer bg-[var(--form-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  select:
    "block w-full px-2 py-2 text-sm text-[var(--form-text)] border border-[var(--form-border)] rounded-lg bg-[var(--form-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  slider:
    "w-full border border-[var(--form-border)] py-2  bg-[var(--form-background)] rounded-lg cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  submitButton:
    "bg-gradient-to-r from-[#3B1179] to-[#4C2EA5]text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-[var(--button-focus-ring)]",
};

const Sharpen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <FaRuler />
          <span>SHARPEN TRANSFORMATION</span>
        </h1>
      </div>
      <div className={styles.formContainer}>
        <p className={styles.description}>
          Sharpen Transformation in Imaginary enhances image clarity by applying
          a sharpening filter. This feature allows precise control over image
          sharpness, making details more defined and crisp. Perfect for refining
          image textures and edges, it improves visual quality and focus across
          various applications.
        </p>
        <form action="" className="space-y-6">
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

          {/* Mode Selection */}
          <div>
            <label className={styles.label} htmlFor="mode">
              Mode
            </label>
            <select id="mode" className={styles.select} required>
              <option value="sharp">Sharp</option>
              <option value="unsharpMask">Unsharp Mask</option>
            </select>
          </div>

          {/* Strength Slider */}
          <div>
            <label className={styles.label} htmlFor="strength">
              Strength
            </label>
            <input
              type="range"
              id="strength"
              min="0"
              max="2000"
              defaultValue="1000"
              className={styles.slider}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className={styles.submitButton}>
              Apply Sharpen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sharpen;
