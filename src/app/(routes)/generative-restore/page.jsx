import React from "react";
import { FaWrench } from "react-icons/fa";

const styles = {
  container: "py-6 px-3 lg:px-8 w-full",
  header: "px-4 md:px-10",
  title:
    "text-2xl flex space-x-3 items-center text-[var(--primary-purple)] font-semibold",
  formContainer: "mt-8 bg-[var(--form-background)] p-6 rounded-lg shadow-md",
  description: "text-[var(--description-text)] mb-6 text-xs lg:text-sm",
  label: "block text-lg font-medium text-[var(--form-text)] mb-2",
  inputText:
    "px-3 py-2 block w-full text-sm text-[var(--form-text)] border border-[var(--form-border)] rounded-lg bg-[var(--form-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  inputFile:
    "block w-full py-2 text-sm text-gray-400 border border-[var(--form-border)] rounded-lg cursor-pointer bg-[var(--form-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  submitButton:
    "bg-gradient-to-r from-[var(--from)] to-[var(--to)]  text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-[var(--button-focus-ring)]",
};

const GenerativeRestore = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <FaWrench />
          <span>GENERATIVE RESTORE</span>
        </h1>
      </div>
      <div className={styles.formContainer}>
        <p className={styles.description}>
          Generative Restore in Imaginary uses AI to mend image imperfections
          like compression artifacts, noise, and blurriness. Through a two-step
          restoration process, it recovers lost details and refines the image,
          enhancing the clarity and quality of old or damaged photos and
          user-generated content.
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
              Restore Image
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenerativeRestore;
