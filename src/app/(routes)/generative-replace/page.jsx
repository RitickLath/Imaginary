import React from "react";
import { FaEdit } from "react-icons/fa";

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
    "block w-full py-2 text-sm text-[var(--input-text)] border border-[var(--input-border)] rounded-lg bg-[var(--input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  submitButton:
    "bg-gradient-to-r from-[#3B1179] to-[#4C2EA5] text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-[var(--button-focus-ring)]",
};

const GenerativeReplace = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <FaEdit />
          <span>GENERATIVE REPLACE</span>
        </h1>
      </div>
      <div className={styles.formContainer}>
        <p className={styles.description}>
          Generative Replace in Imaginary uses AI to replace objects within
          images with alternative objects or images while maintaining a natural
          look. This feature allows for creative or functional alterations in
          images, enhancing the versatility and usage of your media assets.
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

          {/* Item to Replace */}
          <div>
            <label className={styles.label} htmlFor="itemToReplace">
              Item to Replace
            </label>
            <input
              type="text"
              id="itemToReplace"
              placeholder="Describe the item to replace"
              className={styles.inputText}
              required
            />
          </div>

          {/* Replace With */}
          <div>
            <label className={styles.label} htmlFor="replaceWith">
              Replace With
            </label>
            <input
              type="text"
              id="replaceWith"
              placeholder="Describe the replacement item"
              className={styles.inputText}
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className={styles.submitButton}>
              Replace Object
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenerativeReplace;
