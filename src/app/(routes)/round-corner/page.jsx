"use client";

import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
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
    "px-3 py-2 w-full text-sm text-[var(--form-text)] border border-[var(--form-border)] rounded-lg bg-[var(--form-background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]",
  uploadArea:
    "border-dashed border-4 border-[var(--primary-purple)] flex items-center justify-center h-48 rounded-lg cursor-pointer hover:border-[var(--to)] transition-colors duration-300",
  uploadButton:
    "px-4 py-2 rounded-lg shadow hover:opacity-90 transition-opacity focus:outline-none focus:ring-4 focus:ring-[var(--primary-purple)]",
  imagesContainer:
    "mt-6 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6",
  imageBox: "w-full sm:w-1/2 flex flex-col items-center",
  img: "w-full h-auto max-h-64 object-cover rounded-lg",
};

const RoundCorner = () => {
  const [title, setTitle] = useState("");
  const [imageUpload, setImageUpload] = useState("");
  const [mode, setMode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Uploaded Image URL:", imageUpload);
    console.log("Mode of Transform:", mode);
    alert("Form submitted! Check the console for logged values.");
  };

  const handleUpload = (result) => {
    if (result.event === "success") {
      const uploadedUrl = result.info.secure_url;
      setImageUpload(uploadedUrl);
      console.log("Uploaded image URL:", uploadedUrl);
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          <FaCrop />
          <span>ROUND CORNER</span>
        </h1>
      </div>

      {/* Form */}
      <div className={styles.formContainer}>
        <p className={styles.description}>
          Easily add rounded or circular edges to images with customizable
          corner radius. Perfect for embedding media in emails, PDFs, or apps,
          ensuring a sleek and consistent look across platforms.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Title */}
          <div>
            <label htmlFor="title" className={styles.label}>
              Image Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.inputText}
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className={styles.label} htmlFor="image">
              Choose the Image
            </label>
            <div className={styles.uploadArea}>
              <CldUploadWidget
                uploadPreset="Imaginary"
                options={{ cloudName: "drgztn5ek" }}
                onSuccess={handleUpload}
              >
                {({ open }) => (
                  <button
                    onClick={() => open()}
                    type="button"
                    className={styles.uploadButton}
                  >
                    Upload an Image
                  </button>
                )}
              </CldUploadWidget>
            </div>
          </div>

          {/* Mode of Transform */}
          <div>
            <h2 className="text-lg font-medium mb-3">Mode of Transform</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="radius"
                  value="Single Radius"
                  onChange={(e) => setMode(e.target.value)}
                  className="mr-2"
                  required
                />
                Single Radius
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="radius"
                  value="Maximum Radius"
                  onChange={(e) => setMode(e.target.value)}
                  className="mr-2"
                  required
                />
                Maximum Radius
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className={styles.uploadButton}>
              Transform
            </button>
          </div>
        </form>
      </div>

      {/* Uploaded Image Display */}
      {imageUpload && (
        <div className={styles.imagesContainer}>
          <div className={styles.imageBox}>
            <h2 className="text-lg font-medium mb-3">Original Image</h2>
            <img src={imageUpload} alt="Uploaded" className={styles.img} />
          </div>
          <div className={styles.imageBox}>
            <h2 className="text-lg font-medium mb-3">Transformed Image</h2>
            <img src="" alt="Awaited..." className={styles.img} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RoundCorner;
