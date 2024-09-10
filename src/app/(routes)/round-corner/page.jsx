import React from "react";
import { FaCrop } from "react-icons/fa";

const styles = {
  container: "py-6 px-3 lg:px-8 w-full",
  header: "px-4 md:px-10",
  title:
    "text-2xl flex space-x-3 items-center text-[var(--primary-purple)] font-semibold",
  formContainer:
    "mt-8 bg-[var(--form-background)] p-6 rounded-lg shadow-md border border-[var(--form-border)]",
  description: "text-[var(--text-muted)] mb-6 text-xs lg:text-sm",
  label: "block text-lg font-medium text-[var(--form-text)] mb-2",
  inputText:
    "px-3 py-2 block w-full text-sm text-[var(--input-text)] border border-[var(--input-border)] rounded-lg bg-[var(--input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  inputFile:
    "block w-full py-2 text-sm text-[var(--input-placeholder)] border border-[var(--input-border)] rounded-lg cursor-pointer bg-[var(--input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  radioContainer: "flex items-center mb-2",
  radioInput:
    "w-4 h-4 text-[var(--radio-button)] border-[var(--input-border)] focus:ring-[var(--radio-button)]",
  radioLabel: "ml-2 text-sm font-medium text-[var(--text-muted)]",
  submitButton:
    "bg-gradient-to-r from-[var(--from)] to-[var(--to)]     px-6 py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-[var(--primary-purple)]",
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
            <h2 className="text-lg font-medium mb-3">Mode of Transform</h2>
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
