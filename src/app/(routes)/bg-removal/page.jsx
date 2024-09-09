import React from "react";
import { FaImage } from "react-icons/fa";

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
  submitButton:
    "bg-[var(--primary-purple)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-purple-hover)] focus:outline-none focus:ring-4 focus:ring-[var(--button-focus-ring)]",
};

const BGRemoval = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <FaImage />
          <span>BACKGROUND REMOVAL</span>
        </h1>
      </div>
      <div className={styles.formContainer}>
        <p className={styles.description}>
          Background removal transformations in Imaginary are facilitated
          through an AI add-on, which dynamically extracts the foreground
          subject in images while removing the background on the fly. This is
          useful for creating uniform product images or isolating subjects from
          distracting backgrounds.
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

          {/* Submit Button */}
          <div>
            <button type="submit" className={styles.submitButton}>
              Remove Background
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BGRemoval;
