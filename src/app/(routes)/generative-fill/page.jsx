import React from "react";
import { FaFillDrip } from "react-icons/fa";

const styles = {
  container: "py-6 px-3 lg:px-8 w-full",
  header: "px-4 md:px-10",
  title:
    "text-2xl flex space-x-3 items-center text-[var(--primary-purple)] font-semibold",
  formContainer: "mt-8 bg-[var(--form-background)] p-6 rounded-lg shadow-md",
  description: "text-[var(--text-muted)] mb-6 text-xs lg:text-sm",
  label: "block text-lg font-medium text-[var(--form-text)] mb-2",
  inputText:
    "px-3 py-2 block w-full text-sm text-[var(--input-text)] border border-[var(--input-border)] rounded-lg bg-[var(--input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  inputFile:
    "block w-full py-2 text-sm text-[var(--input-placeholder)] border border-[var(--input-border)] rounded-lg cursor-pointer bg-[var(--input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  select:
    "block w-full px-2 py-2 text-sm text-[var(--input-text)] border border-[var(--input-border)] rounded-lg bg-[var(--input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  submitButton:
    "bg-gradient-to-r from-[var(--from)] to-[var(--to)]  text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-[var(--button-focus-ring)]",
};

const GenerativeFill = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <FaFillDrip />
          <span>GENERATIVE FILL</span>
        </h1>
      </div>
      <div className={styles.formContainer}>
        <p className={styles.description}>
          Generative Fill in Imaginary, utilized with various cropping methods,
          uses AI to expand original images, aiding in orientation changes. It
          seamlessly integrates AI-generated backgrounds with existing content,
          facilitating creative solutions and reducing workflow time while
          allowing programmatic control over transformations.
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

          {/* Orientation Options */}
          <div>
            <label className={styles.label} htmlFor="orientation">
              Orientation
            </label>
            <select id="orientation" className={styles.select} required>
              <option value="square">Square</option>
              <option value="portrait">Portrait</option>
              <option value="landscape">Landscape</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className={styles.submitButton}>
              Apply Fill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenerativeFill;
